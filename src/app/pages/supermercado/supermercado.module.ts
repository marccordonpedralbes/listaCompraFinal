import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MenuComponent } from 'src/app/components/menu/menu.component'
import { IonicModule } from '@ionic/angular';

import { SupermercadoPageRoutingModule } from './supermercado-routing.module';

import { SupermercadoPage } from './supermercado.page';
import { FabComponent } from 'src/app/components/fab/fab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupermercadoPageRoutingModule
  ],
  declarations: [
    SupermercadoPage,
    MenuComponent,
    FabComponent,
  ]
})
export class SupermercadoPageModule {}
