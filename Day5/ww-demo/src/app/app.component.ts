import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ww-demo';
  sumOfNumbers: number = 0;

  calculateSumSync(){
    console.log(new Date().getTime());
    let sum = 0;
    for(let i=0; i < 10000000000; i++){
      sum = sum+(i*i*i*i)
    }
    this.sumOfNumbers = sum;
    console.log(new Date().getTime());
  }

  calculateSumWithSync(){
    const myWebWorker = new Worker(new URL('./calc-big-sum.worker.ts', import.meta.url));
    myWebWorker.onmessage = (message) =>{
      console.log('Recevied the value!', message.data);
      this.sumOfNumbers = message.data;
    }
    myWebWorker.postMessage(10000);
  }
}
