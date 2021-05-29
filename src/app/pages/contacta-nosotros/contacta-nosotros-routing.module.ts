import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactaNosotrosPage } from './contacta-nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: ContactaNosotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactaNosotrosPageRoutingModule {}
