import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MenuComponent } from 'src/app/components/menu/menu.component'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FabComponent } from './components/fab/fab.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FabComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
