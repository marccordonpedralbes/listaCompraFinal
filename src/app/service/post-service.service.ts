import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  cesta: Product[] = []
  url = 'http://178.62.208.166/api/';
  constructor(public http: HttpClient)  { }

  getProducts():Promise<any>{
    let url = this.url + 'products/';
    try {
        return this.http.get(url).toPromise();
    } catch (error) {
      throw new Error(error);
    }
  }

  getRecipes():Promise<any>{
    let url = this.url + 'recipes/';
    try {
        return this.http.get(url).toPromise();
    } catch (error) {
      throw new Error(error);
    }
  }

  añadirCompra(id: string, productos: Product[]){
    var aux = true;
    let num: number;
    for(let producto of productos){
      if(producto.id === id){
        for(let añadir of this.cesta){
          num++;
          if(producto.nombre === añadir.nombre){
            aux = false;
          }
        }
        if(aux){
          this.cesta.push({
            id: (productos.length+1).toString(),
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            departamento: producto.departamento,
            imgUrl: producto.imgUrl
          });
        }
      }
    }
    if(productos.length > 0){
    productos = productos.filter(prod => {
      return prod.id !== id
    })
    }
    else 
      productos = null;
  }

  getCesta(){
    return this.cesta
  }

  consumir(nombre: string){
    this.cesta = this.cesta.filter(list => {
      return list.nombre !== nombre
    })
  }

}
