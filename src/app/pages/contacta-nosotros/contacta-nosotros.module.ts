import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactaNosotrosPageRoutingModule } from './contacta-nosotros-routing.module';

import { ContactaNosotrosPage } from './contacta-nosotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactaNosotrosPageRoutingModule
  ],
  declarations: [ContactaNosotrosPage]
})
export class ContactaNosotrosPageModule {}
