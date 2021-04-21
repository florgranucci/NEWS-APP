import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { BusinessComponent } from './business/business.component';
import { AppleComponent } from './apple/apple.component';
import { TechComponent } from './tech/tech.component';
import { MostReadComponent } from './most-read/most-read.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'business',
    component: BusinessComponent,
  },
  {
    path: 'apple',
    component: AppleComponent,
  },
  {
    path:'tech',
    component: TechComponent,
  },
  {
    path: 'most-read',
    component: MostReadComponent,
  },
  {
    path: 'science',
    component: ScienceComponent,
  },
  {
    path: 'health',
    component: HealthComponent,
  },
  {
    path: 'entertainment',
    component: EntertainmentComponent,
  },
  {
    path: 'sports',
    component: SportsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }