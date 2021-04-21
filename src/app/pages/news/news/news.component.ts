import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  goBusiness(){
    this.router.navigate (['news/business']);    
  }
  goApple(){
    this.router.navigate(['news/apple']);
  }
  goTech(){
    this.router.navigate(['news/tech']);
  }
  goLatest(){
    this.router.navigate(['news/most-read']);
  }
  goSports() {
    this.router.navigate(['news/sports']);
  }
  goScience() {
    this.router.navigate(['news/science']);
  }
  goHealth() {
    this.router.navigate(['news/health']);
  }
  goEntertainment() {
    this.router.navigate(['news/entertainment']);
  }

}
