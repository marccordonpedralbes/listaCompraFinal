import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { Recipe } from 'src/app/interface/recipes';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {

  recipes: Recipe[]
  cesta: Product[]
  posiblesRecipes: Recipe[]
  constructor(public postServices:PostServiceService) {  
    this.posiblesRecipes = [];
   }

   async ngOnInit() {
     this.cesta = this.postServices.getCesta();
    this.postServices.getRecipes().then(
      (respuesta) => {
          this.recipes = respuesta.results;
        });
        
      }

      obtener(){
        let numeroProductos: number = 0;
        for(let recipe of this.recipes){
          for(let cosas of recipe.ingredientes){
            for(let cestaIngrediente of this.cesta){
              if(cestaIngrediente.nombre === cosas.nombre){
                numeroProductos++;
              }
            }
          }
          if(numeroProductos === recipe.ingredientes.length)
            this.posiblesRecipes.push(recipe)
          numeroProductos = 0;
        }
      }

}
