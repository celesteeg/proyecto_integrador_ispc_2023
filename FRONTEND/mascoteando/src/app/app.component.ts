import { Component, OnInit } from '@angular/core';
import {ProductosService} from './servicios/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mascoteando';
  public productos:any = [ ]

  constructor(private ProductosService:ProductosService){

  }
  ngOnInit():void {
    this.obtenerProductos();

  }

  public obtenerProductos(){
    this.productos.get('http://localhost:3000/')
    .subscribe ((respuesta: any) => {
      this.productos = respuesta;
      console.log(this.productos);
    });
    

    

  }
}


    

  


