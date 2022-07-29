import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponentIn implements OnInit {
  articles: any[] = [];

  constructor(
    private newsService: DataService
  ) { }

  ngOnInit(): void {
    this.newsService.getHeadLines().subscribe((data:any)=>{
      console.log(data);
      this.articles = data.articles;
    });
  }

}
