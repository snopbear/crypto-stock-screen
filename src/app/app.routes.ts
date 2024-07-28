import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'crypto-list', pathMatch: 'full' },

  {
    path: 'crypto-list',
    loadComponent: () =>
      import('./@feature/crypto-list/crypto-list.component').then(
        (x) => x.CryptoListComponent
      ),
  },
  {
    path: 'task-overview',
    loadComponent: () =>
      import('./@feature/task-overview/task-overview.component').then(
        (x) => x.TaskOverviewComponent
      ),
  },
  { path: '**',
    loadComponent: () =>
      import('./@feature/not-found/not-found.component').then(
        (x) => x.NotFoundComponent
      ),},
];




