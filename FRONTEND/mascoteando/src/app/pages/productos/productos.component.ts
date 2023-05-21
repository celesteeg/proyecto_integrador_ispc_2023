import { Component, OnInit } from '@angular/core';

import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


  export class ProductosComponent{
    url:String= "http://localhost:3000/";
      constructor(public ProductosService:ProductosService) { }
       
      
        }
        ;
    
      
    


