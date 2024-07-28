import { Component, inject, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ITicker } from '@models/index';
import { BinanceService, unsubscribeService } from '@services-common/index';
import cryptoListComponentsImports from './crypto-list.component.imports';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss'],
  standalone: true,
  imports: [cryptoListComponentsImports],
  providers: [unsubscribeService],
})
export class CryptoListComponent implements OnInit {
  //#region declaration
  private _unsubscribeService = inject(unsubscribeService);
  private binanceService = inject(BinanceService);

  cryptos: any[] = [];
  filteredCryptos: any[] = [];
  filters: any = {};
  selectedCrypto: any = null;
  selectedCryptoData: number[] = [];
  selectedCryptoLabels: string[] = [];
  private tickerStream$!: Subject<MessageEvent>;
  //#endregion declaration

  //#region methods
  fetchData() {
    this.binanceService
      .get24hrTicker()
      .pipe(takeUntil(this._unsubscribeService.destroy$))
      .subscribe((data: ITicker[]) => {
        this.cryptos = data.filter((crypto: any) =>
          crypto.symbol.endsWith('USDT')
        );
        this.applyFilters(this.filters);
        this.subscribeToTickerStream();
      });
  }

  subscribeToTickerStream() {
    const symbols = this.cryptos.map((crypto) => crypto.symbol);
    this.tickerStream$ = this.binanceService.subscribeTickerStream(symbols);

    this.tickerStream$
      .pipe(takeUntil(this._unsubscribeService.destroy$))
      .subscribe((message: MessageEvent) => {
        const update = JSON.parse(message.data);
        this.updateCryptoData(update);
      });
  }

  updateCryptoData(update: any) {
    const index = this.cryptos.findIndex(
      (crypto) => crypto.symbol === update.s
    );
    if (index !== -1) {
      this.cryptos[index].lastPrice = update.c;
      this.cryptos[index].priceChangePercent = update.P;
      this.cryptos[index].quoteVolume = update.q;
      this.applyFilters(this.filters);
    }
  }

  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((filters) => {
      if (filters) {
        this.filters = filters;
        this.applyFilters(this.filters);
      }
    });
  }

  applyFilters(filters: any) {
    this.filteredCryptos = this.cryptos.filter((crypto) => {
      return (
        (!filters.minVolume || crypto.quoteVolume >= filters.minVolume) &&
        (!filters.maxVolume || crypto.quoteVolume <= filters.maxVolume) &&
        (!filters.minPriceChange ||
          crypto.priceChangePercent >= filters.minPriceChange) &&
        (!filters.maxPriceChange ||
          crypto.priceChangePercent <= filters.maxPriceChange) &&
        (!filters.minPrice || crypto.lastPrice >= filters.minPrice) &&
        (!filters.maxPrice || crypto.lastPrice <= filters.maxPrice)
      );
    });
  }

  onCryptoClick(crypto: any) {
    this.selectedCrypto = crypto;
    this.fetchCryptoHistory(crypto.symbol);
  }

  fetchCryptoHistory(symbol: string) {
    this.binanceService
      .getKlines(symbol, '1d')
      .pipe(takeUntil(this._unsubscribeService.destroy$))
      .subscribe((data) => {
        this.selectedCryptoData = data.map((candle: any) =>
          parseFloat(candle[4])
        ); // Close price
        this.selectedCryptoLabels = data.map((candle: any) =>
          new Date(candle[0]).toLocaleDateString()
        );
      });
  }
  //#endregion methods

  //#region  lifecycle methods

  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.fetchData();
  }
  //#endregion  lifecycle methods
}
