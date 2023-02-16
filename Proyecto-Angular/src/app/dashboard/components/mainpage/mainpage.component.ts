import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { PostdialogComponent } from '../postdialog/postdialog.component';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
import { SearchdialogComponent } from '../searchdialog/searchdialog.component';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  constructor(private movieservice: MovieService, private matDialog:MatDialog ){}



  movies!: Movie[] ;
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

  openDialog3(){
    this.matDialog.open(SearchdialogComponent,{
      width: '500px',
    })
  }

  openDialog4(){
    this.matDialog.open(UpdatedialogComponent,{
      width: '500px',
    })
  }
  

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

  
