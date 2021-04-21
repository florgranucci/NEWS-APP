import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  articles = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getSports().subscribe((data)=>{
      this.articles = data['articles'];
    });
  }

}