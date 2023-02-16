import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent {

  constructor(private movieservice: MovieService, private matDialog:MatDialog ){}

  name! : string;
  password! : string;

  public login() {
    this.movieservice.login();
  }

}
