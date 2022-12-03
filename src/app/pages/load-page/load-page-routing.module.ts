import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadPagePage } from './load-page.page';

const routes: Routes = [
  {
    path: '',
    component: LoadPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadPagePageRoutingModule {}
