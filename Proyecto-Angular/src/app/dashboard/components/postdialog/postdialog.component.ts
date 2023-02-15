import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-postdialog',
  templateUrl: './postdialog.component.html',
  styleUrls: ['./postdialog.component.css']
})
export class PostdialogComponent {

  constructor(private movieservice: MovieService ){}

  movieName!: string;

  public postname(moviename: string){
    this.movieservice.postname(moviename).subscribe(respuesta => {
      console.log(' success creating entry: ', respuesta);
    }), (error: any) => {
      console.log('error : ', error);
    }
  }



}
