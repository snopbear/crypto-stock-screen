import { Component } from '@angular/core';
import appComponentsImports from './app.component.imports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [appComponentsImports],
})
export class AppComponent {
  title = 'Crypto Stock Screener';
}
