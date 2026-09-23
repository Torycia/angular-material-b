import { Routes } from '@angular/router';

export const routes: Routes = [

     {
    path: '',
    loadComponent: () =>
      import('./components/card/card').then(m => m.Card),
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./components/card/card')
        .then(m => m.Card),
  },
  {
    path: 'input',
    loadComponent: () =>
      import('./components/input/input')
        .then(m => m.Input),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./components/form/form')
        .then(m => m.Form),
  },
  {
    path: 'dialog',
    loadComponent: () =>
      import('./components/dialog/dialog')
        .then(m => m.Dialog),
  },
];