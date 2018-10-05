import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  url:string = 'https://weather-file.herokuapp.com/weather.php?command=search&keyword=';
  keyword:string;
  weatherData={};
  constructor(private router: Router,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.keyword = params['keyword'];
      console.log(this.keyword);
      this.getWeather(this.url + this.keyword)
    });
  }

  getWeather(url){
    this.httpClient
      .get(url).subscribe(res=>
      {
        this.weatherData=res[0];
        
          console.log(res);
      }
    );
  }
}
