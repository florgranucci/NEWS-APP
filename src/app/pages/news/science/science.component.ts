import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
articles = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getScience().subscribe((data)=>{
      this.articles = data['articles'];
    });
  }

}