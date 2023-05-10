

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
    { path: 'body', component: BodyComponent },
    { path: 'footer', component: FooterComponent },
    {path: 'header', component: HeaderComponent },

];


@NgModule({
  imports: [
     [RouterModule.forRoot(routes)]
    ],
     exports: [RouterModule],
})
export class AppRoutingModule { }
