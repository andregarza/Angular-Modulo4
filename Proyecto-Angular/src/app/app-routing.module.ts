import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './dashboard/components/mainpage/mainpage.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './home/components/homepage/homepage.component';
import { LoginpageComponent } from './login/components/loginpage/loginpage.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
 
  {path: 'login', component: LoginpageComponent},
  {path: '', component: HomepageComponent},
  {path:'dashboard', component: MainpageComponent, canActivate: [AuthGuard],},
  {path: '**', component: NotFoundComponent}
  
  
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
