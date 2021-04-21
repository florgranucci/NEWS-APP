
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { BusinessComponent } from './business/business.component';
import { AppleComponent } from './apple/apple.component';
import { TechComponent } from './tech/tech.component';
import { MostReadComponent } from './most-read/most-read.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';


@NgModule({
  declarations: [NewsComponent, BusinessComponent, AppleComponent, TechComponent, MostReadComponent, ScienceComponent, HealthComponent, EntertainmentComponent, SportsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }