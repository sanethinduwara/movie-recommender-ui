import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  RMSE = '-';
  movieService: MovieService;
  isTraining = false;

  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  ngOnInit(): void {
    
  }

  retrainModel(){
    this.isTraining = true;
    this.movieService.retrainModel().subscribe(res => {
      this.RMSE = res.RMSE;
      this.isTraining = false;
    })
  }

}
