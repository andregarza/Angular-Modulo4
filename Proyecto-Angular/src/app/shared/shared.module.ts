import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeRoutingModule } from '../home/home-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    NotFoundComponent,
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
