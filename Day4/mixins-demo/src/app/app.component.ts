import { Component, Input } from '@angular/core';
import { ContainerTruck, Engine, Truck } from './myClasses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mixins-demo';
  state: string = "";
  private _weight:number = 0;
  objContainerTruck: ContainerTruck = new ContainerTruck;
  @Input() get weight():number{
    return this._weight;
  }
  set weight(value:number){
    this._weight =+ value;
  }

  startEngine() {
    // let objEngine = new Engine();
    // this.state = objEngine.StartEngine();
    this.state = this.objContainerTruck.StartEngine();
  }

  stopEngine() {
    // let objEngine = new Engine();
    // this.state = objEngine.StopEngine();
    this.state = this.objContainerTruck.StopEngine();
  }

  transportLoad() {
    // let objTruck = new Truck();
    // this.state = objTruck.TransportLoad(this._weight);
    this.state = this.objContainerTruck.TransportLoad(this._weight);
  }
}
