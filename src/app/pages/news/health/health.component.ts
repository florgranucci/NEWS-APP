import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
articles = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getHealth().subscribe((data) => {
       this.articles = data['articles'];
    });
  }

}