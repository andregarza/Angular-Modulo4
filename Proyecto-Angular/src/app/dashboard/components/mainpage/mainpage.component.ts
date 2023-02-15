import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { PostdialogComponent } from '../postdialog/postdialog.component';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  constructor(private movieservice: MovieService, private matDialog:MatDialog ){}



  movies!: Movie[] ;
  index!: [] ;
  movie!: Movie;
  postmovie!: any;
  id!: any;
  selectedmovie!: Movie;

  openDialog(){
    this.matDialog.open(PostdialogComponent,{
      width: '350px',
    })
  }

  openDialog2(){
    this.matDialog.open(DeletedialogComponent,{
      width: '350px',
    })
  }
  

  ngOnInit() {

    let postmovie: Movie ={

      name: "Test",
      year: 1997

    }


    this.movieservice.getmovies()
    .subscribe
    (
      data => 
      {
        this.movies = data;
      }

    );

    this.movieservice.getmoviesid(4)
    .subscribe
    (
      data => 
      {
        this.movie = data;
        console.log(data);
      }

      

    );


  }

  public getid(id:any){
    this.movieservice.getmoviesid(id)
    .subscribe
    (
      data => 
      {
        this.movie = data;
        console.log(data);
      }

      

    );
  }

  public post(){
    this.movieservice.post({"name": "Test",
    "year": 1997}).subscribe(respuesta => {
      console.log('Respuesta en caso de que la solicitud retorne un estado success: ', respuesta);
    }), (error: any) => {
      console.log('error : ', error);
    }
  }

  

  public selectmovie(movie: any){
    this.selectedmovie = movie;
  }

}
