import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Movie } from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto-Angular';

  constructor(private movieservice: MovieService){

  }

  movies: Movie[] | undefined;

  ngOnInit() {

    this.movieservice.getmovies()
    .subscribe
    (
      data => 
      {
        this.movies = data;
      }

    );
  }
}
