import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlApi= '  http://localhost:3000/productos';
    constructor(private http:HttpClient) { }

    public getData():Observable <any>{
      return this.http.get(this.urlApi);

    }
  }



