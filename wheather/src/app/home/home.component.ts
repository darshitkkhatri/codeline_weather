import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  city:string;
  url:string = 'https://weather-file.herokuapp.com/weather.php?command=location&woeid='
 cityWoeid=["2344116","638242","44418"]

  constructor(private router: Router,
      private httpClient: HttpClient,
      public dataService:DataService) { }

  ngOnInit() {
    this.cityWoeid.map((key)=>{
      console.log(key);
      this.dataService.weatherData[key]= this.getWeather(this.url + key);
    });
    console.log("this.dataService.weatherData",this.dataService.weatherData)
  }

  searchcity(){
    this.router.navigate(['/search/'+this.city ]);
  }

  getWeather(url){
    return this.httpClient
      .get(url).subscribe(res=>
      {
        return res;
      }
    );
  }

}
