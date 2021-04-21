
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  articles = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getBusiness().subscribe((data) => {
      this.articles = data['articles'];
    });
  }
}