import { NgClass } from '@angular/common';
import { CryptoChartComponent } from '../crypto-chart/crypto-chart.component';

const modules = [NgClass];
const components = [CryptoChartComponent];

const cryptoListComponentsImports = [...components,...modules];

export default cryptoListComponentsImports;
