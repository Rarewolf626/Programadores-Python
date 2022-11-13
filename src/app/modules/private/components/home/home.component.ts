import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,map } from 'rxjs';
import { RootObject } from 'src/app/project/models/Movies';
import { MoviesService } from 'src/app/project/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  result : RootObject = {} as RootObject;
  subscription : Subscription = new Subscription();
  constructor(private moviesService : MoviesService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(){
    this.subscription = this.moviesService.getMovies().pipe(
      map((result)=>{
        this.result = result;
      })
    ).subscribe();
  }

}
