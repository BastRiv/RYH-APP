import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
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
    path: 'new-account',
    loadChildren: () => import('./pages/new-account/new-account.module').then( m => m.NewAccountPageModule)
  },
  {
    path: 'reset-pass',
    loadChildren: () => import('./pages/reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/tabs/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./pages/tabs/main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./pages/tabs/bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'load-page',
    loadChildren: () => import('./pages/load-page/load-page.module').then( m => m.LoadPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
