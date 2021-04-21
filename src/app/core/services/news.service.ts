import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_KEY = 'eb7d99788c884b1b8faad11ad627d9c8';

  constructor(private http: HttpClient ) { }
  getBusiness(): Observable<any>{
    return this.http.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${this.API_KEY}`);
  }
  getApple(): Observable<any>{
    return this.http.get(`https://newsapi.org/v2/everything?q=apple&from=2020-08-22&to=2020-08-22&sortBy=popularity&apiKey=${this.API_KEY}`)
  }
  getTech(): Observable<any>{
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.API_KEY}`)
  }
  getLatest(): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${this.API_KEY}`)
  }

  getSports(): Observable<any> {
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${this.API_KEY}`)
  }
  getScience(): Observable<any> {
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${this.API_KEY}`)
  }
  getHealth(): Observable<any> {
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${this.API_KEY}`)
  }

  getEntertainment(): Observable<any> {
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${this.API_KEY}`)
  }


}