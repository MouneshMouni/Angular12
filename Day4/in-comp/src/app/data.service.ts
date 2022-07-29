import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = '596e437027ff414fa6dc38d2115d3c09';
  constructor(private httpClient : HttpClient) { }

  getHeadLines(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }
}
