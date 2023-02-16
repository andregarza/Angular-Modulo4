import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogindialogComponent } from 'src/app/dashboard/components/logindialog/logindialog.component';
import { PostdialogComponent } from 'src/app/dashboard/components/postdialog/postdialog.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private matDialog:MatDialog){

  }

  openDialog(){
    this.matDialog.open(LogindialogComponent,{
      width: '350px',
    })
  }

}
