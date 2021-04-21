import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
articles = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getApple().subscribe((data)=>{
      this.articles = data['articles'];
    });
  }

}