import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-postdialog',
  templateUrl: './postdialog.component.html',
  styleUrls: ['./postdialog.component.css']
})
export class PostdialogComponent {

  errorMessage!: string;
  movie! : [];

  constructor(private movieservice: MovieService ){}

  movieName!: string;

  public postname(moviename: string){
    this.movieservice.postname(moviename).subscribe(activity => {
      console.log(activity);

    }), (err: any) => {
      this.errorMessage = err.message;
    };
  }

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




}
