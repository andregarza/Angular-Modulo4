import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.css']
})
export class DeletedialogComponent {

  constructor(private movieservice: MovieService ){}

  movieId!: number;

  public deleteid(id: number){
    this.movieservice.delete(id).subscribe(respuesta => {
      console.log(' success creating entry: ', respuesta);
    }), (error: any) => {
      console.log('error : ', error);
    }
  }

}
