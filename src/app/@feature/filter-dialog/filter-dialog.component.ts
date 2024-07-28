import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class FilterDialogComponent {
  filters = {
    minVolume: null,
    maxVolume: null,
    minPriceChange: null,
    maxPriceChange: null,
    minPrice: null,
    maxPrice: null,
  };

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>) {}

  applyFilters() {
    this.dialogRef.close(this.filters);
  }
}
