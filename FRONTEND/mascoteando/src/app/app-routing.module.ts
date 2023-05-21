

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//rutas agregadas
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';



const routes: Routes = [
    { path: 'body', component: BodyComponent },
    { path: 'footer', component: FooterComponent },
    {path: 'header', component: HeaderComponent },

    //agregados
    {path:'productos', component:ProductosComponent },
    {path: 'quienes-somos', component: QuienesSomosComponent },
    {path: 'dashboard', component: DashboardComponent },
];


@NgModule({
  imports: [
     [RouterModule.forRoot(routes)]
    ],
     exports: [RouterModule],
})
export class AppRoutingModule { }
