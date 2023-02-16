import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.css']
})
export class UpdatedialogComponent {

  constructor(private movieservice: MovieService ){}

  movielst!: {} 
  movieId!: number;
  movies!: Movie ;
  movie!: []
  upt: boolean = false;
  name!: string;
  year!: number;
  overview!: string;
  date!: string;




  public getid(id:any){
    this.movieservice.getmoviesid(id)
    .subscribe
    (
      data => 
      {
        this.movies = data;
      }

    );
  }

  

  public update(id:any, post:{}){
    this.movielst = {}

    this.movieservice.update(id,post).subscribe(respuesta => {
      

      console.log(' success creating entry: ', respuesta);
    }), (error: any) => {
      console.log('error : ', error);
    }
    
  }

  public switch(){

    this.name = this.movies.name;
      this.year = this.movies.year;
      this.overview = this.movies.overview;

      this.movielst = {name:this.name, year: this.year, overview: this.overview, watchedAt: this.date }
    
    return this.movielst;
    
  }





}
