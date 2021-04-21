import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
articles = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTech().subscribe((data) => {
    this.articles = data['articles'];
    });
  }
}