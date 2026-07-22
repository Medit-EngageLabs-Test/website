import { Routes } from '@angular/router';

// Sito vetrina pubblico: nessun gating di autenticazione. La landing è una
// pagina unica con sezioni ad ancora; la root la carica direttamente.
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
];
