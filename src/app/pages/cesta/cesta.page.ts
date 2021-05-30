import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.page.html',
  styleUrls: ['./cesta.page.scss'],
})
export class CestaPage implements OnInit {

  cesta: Product[];

  constructor(public postServices:PostServiceService) {
    this.cesta = []
   }

  ngOnInit() {
    this.cesta = this.postServices.getCesta();
  }

  comprarTodo(){
    this.postServices.compraRealizada();
    this.cesta = this.postServices.getCesta();
  }
}
