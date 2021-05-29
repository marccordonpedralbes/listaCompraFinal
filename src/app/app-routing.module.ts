import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'supermercado',
    loadChildren: () => import('./pages/supermercado/supermercado.module').then( m => m.SupermercadoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.component').then( m => m.MenuComponent)
  },
  {
    path: 'cesta',
    loadChildren: () => import('./pages/cesta/cesta.module').then( m => m.CestaPageModule)
  },
  {
    path: 'contacta-nosotros',
    loadChildren: () => import('./pages/contacta-nosotros/contacta-nosotros.module').then( m => m.ContactaNosotrosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
