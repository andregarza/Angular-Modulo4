import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-searchdialog',
  templateUrl: './searchdialog.component.html',
  styleUrls: ['./searchdialog.component.css']
})
export class SearchdialogComponent {

  constructor(private movieservice: MovieService ){}

  moviename!: string;
  movies!: Movie[] ;
  movie!: []

  public getInfo(moviename: string){
    this.movieservice.getinfo(moviename)
    .subscribe
    (
      data => 
      {
        this.movie = data;
      }

    );
  }

  public postname(moviename: string){
    this.movieservice.postname(moviename).subscribe(respuesta => {
      console.log(' success creating entry: ', respuesta);
    }), (error: any) => {
      console.log('error : ', error);
    }
  }

}
