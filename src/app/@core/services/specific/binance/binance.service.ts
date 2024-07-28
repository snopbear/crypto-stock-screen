import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from '../websocket/websocket.service';
import { ITicker } from '@models/index';
import { urls } from '@constants/index';

@Injectable({
  providedIn: 'root',
})
export class BinanceService {


  constructor(private http: HttpClient, private wsService: WebsocketService) {}

  get24hrTicker(): Observable<ITicker[]> {
    return this.http.get<ITicker[]>(`${urls.apiUrl}/ticker/24hr`);
  }

  getKlines(symbol: string, interval: string): Observable<any> {
    return this.http.get(`${urls.apiUrl}/klines`, {
      params: { symbol, interval },
    });
  }

  subscribeTickerStream(symbols: string[]): Subject<MessageEvent> {
    const streams = symbols
      .map((symbol) => `${symbol.toLowerCase()}@ticker`)
      .join('/');
    return this.wsService.connect(`${urls.wsUrl}/${streams}`);
  }
}
