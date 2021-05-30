import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.page.html',
  styleUrls: ['./supermercado.page.scss'],
})
export class SupermercadoPage implements OnInit {

  products:Product[];
  constructor(public postServices:PostServiceService) { }

  async ngOnInit() {
    this.postServices.getProducts().then(
      (respuesta) => {
          this.products = respuesta.results;
      });
  }

  async viewWillEnter() {
    this.postServices.getProducts().then(
      (respuesta) => {
          this.products = respuesta.results;
      });
  }

  comprar(id: string){
    this.postServices.añadirCompra(id, this.products);
  }

}
