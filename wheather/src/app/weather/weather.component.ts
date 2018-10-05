import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent 
implements OnInit {

  woeid : number;
  weatherData={};
  url:string = 'https://weather-file.herokuapp.com/weather.php?command=location&woeid='
  constructor(private router: Router,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient,
    public dataService:DataService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.woeid = params['woeid'];
      console.log(this.woeid);
      if(this.dataService.weatherData.indexOf(this.woeid)!==-1)
      this.getWeather(this.url + this.woeid)
      else
      this.weatherData=this.dataService.weatherData[this.woeid]

    });
  }
  
  getWeather(url){
    this.httpClient
      .get(url).subscribe(res=>
      {
        this.weatherData=res;
          console.log(res);
      }
    );
  }
  
}
