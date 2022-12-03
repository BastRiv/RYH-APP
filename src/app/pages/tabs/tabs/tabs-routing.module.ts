import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [ 
      {
        path:'main-page',
        loadChildren: () => import('../main-page/main-page.module').then( m => m.MainPagePageModule)
      },
      {
        path:'bookings',
        loadChildren: () => import('../bookings/bookings.module').then( m => m.BookingsPageModule)
      },
      {
        path:'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}




