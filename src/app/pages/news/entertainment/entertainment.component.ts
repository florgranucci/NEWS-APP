import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
articles = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getEntertainment().subscribe((data) => {
     this.articles = data['articles'];
    });
  }

}
