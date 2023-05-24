import { Component ,OnInit} from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


  export class ProductosComponent{
      data: any[] = [];
      constructor(private ProductosService:ProductosService) { }

      ngOnInit():void {
        this.llenarData()
      }

      llenarData(){

        this.ProductosService.getData().subscribe(data =>{
          this.data=data;

          console.log(this.data);

        })


      }

}






