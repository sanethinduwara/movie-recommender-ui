import {Component, OnInit} from '@angular/core';
import {MovieService} from 'src/app/service/movie.service';
import {ChartDataSets, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  stats = {user_rmse: 0, group_rmse: 0};
  movieService: MovieService;
  isTraining = false;

  public userGraphData: ChartDataSets[] = [];
  public groupGraphData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  public userGraphColors: Color[] = [
    {borderColor: 'red'},
    {borderColor: 'green'},
  ];
  public groupGraphColors: Color[] = [
    {borderColor: 'orange'},
    {borderColor: 'dodgerblue'},
  ];
  public lineChartLegend = true;
  public lineChartType = 'line' as ChartType;
  public lineChartPlugins = [];

  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  ngOnInit(): void {
    this.isTraining = true;
    this.movieService.getRecommendationModelStats().subscribe((res: any) => {
      this.stats = res;
      this.lineChartLabels = Array.from({length: res.user_train_losses.length}, (v, k) => k + 1) as any[];
      this.userGraphData = [
        {data: res.user_train_losses, label: 'User - Training Loss'},
        {data: res.user_val_losses, label: 'User - Validation Error'}
      ];
      this.groupGraphData = [
        {data: res.group_train_losses, label: 'Group - Training Loss'},
        {data: res.group_val_losses, label: 'Group - Validation Error'}
      ];
      this.isTraining = false;
    });
  }

}
