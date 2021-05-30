import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Product } from 'src/app/interface/product';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products:Product[];

  constructor(private menu: MenuController) {}
  
}
