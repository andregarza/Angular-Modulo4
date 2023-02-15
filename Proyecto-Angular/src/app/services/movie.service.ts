import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpclient: HttpClient) { }

  getmovies(): Observable<any>{
    return this.httpclient.get('http://localhost:8080/movies')
  }

  getmoviesid(id: any): Observable<any>{
    
    return this.httpclient.get('http://localhost:8080/movies/' + id )
  }

  post(post: {}): Observable<any>{
    return this.httpclient.post('http://localhost:8080/movies',post);
  }

  postname(name: string): Observable<any>{
    return this.httpclient.post('http://localhost:8080/movies/' + name , null);
  }

  delete(id: any): Observable<any>{
    return this.httpclient.delete('http://localhost:8080/movies/' + id)
  }

  
}
