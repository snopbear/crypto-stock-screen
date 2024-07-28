import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import cryptoChartComponentsImports from './crypto-chart.component.imports';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.scss'],
  standalone: true,
  imports: [cryptoChartComponentsImports],
})
export class CryptoChartComponent implements OnChanges {
  @Input() symbol!: string;
  @Input() data!: number[];
  @Input() labels!: string[];

  public chartData: any[] = [];
  public chartLabels: string[] = [];

  public view: [number, number] = [700, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Time';
  public showYAxisLabel = true;
  public yAxisLabel = 'Price';
  colorScheme: Color = {
    name: '',
    group: ScaleType.Linear,
    selectable: false,
    domain: ['#52C51A', '#D93638', '#1891FF', '#717470', '#FBAE14'],
  };

  onResize(event: any) {
    if (event.target.innerWidth < 1200) {
      this.view = [event.target.innerWidth / 1.35, 400];
    }
  }
  ngOnChanges() {
    this.chartData = [
      {
        name: this.symbol,
        series: this.labels.map((label, index) => ({
          name: label,
          value: this.data[index],
        })),
      },
    ];
  }
}
