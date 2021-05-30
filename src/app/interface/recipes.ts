import { Product } from "./product";

export interface Recipe {
    id: String,
    nombre: String,
    descripcion: String,
    duracion: number,
    dificultad: String,
    ingredientes: Product[]
}