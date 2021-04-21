import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-most-read',
  templateUrl: './most-read.component.html',
  styleUrls: ['./most-read.component.css']
})
export class MostReadComponent implements OnInit {
  articles = [];
  articlesOne = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getLatest().subscribe((data) => {
    this.articles = data['articles'];
    });

  
  }
  
}