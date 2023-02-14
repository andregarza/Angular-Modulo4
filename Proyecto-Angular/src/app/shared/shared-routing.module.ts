import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../home/components/homepage/homepage.component';
import { LoginpageComponent } from '../login/components/loginpage/loginpage.component';

const routes: Routes = [
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SharedRoutingModule { }
  