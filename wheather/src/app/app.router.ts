// Main
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Admin
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { SearchComponent } from './search/search.component';

// Route Configuration
export const routes: Routes = [
  { 
    path: '', component: HomeComponent ,pathMatch: 'full'
  },
  { 
    path: 'weather/:woeid', component: WeatherComponent 
  },
  { 
    path: 'search/:keyword', component: SearchComponent 
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
