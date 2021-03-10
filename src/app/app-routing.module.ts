import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
