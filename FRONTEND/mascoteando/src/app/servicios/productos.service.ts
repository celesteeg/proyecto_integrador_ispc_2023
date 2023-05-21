import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url:String= "http://localhost:3000/";
    constructor(private http:HttpClient) { }
  
    obtenerProductos():Observable <any>{
      return this.http.get(this.url+"productos");
    
    }
  }

  

