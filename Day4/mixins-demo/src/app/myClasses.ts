export class Engine {
    constructor(){}
    public StartEngine(): string {
        return "....Engine is Starting";
    }

    public StopEngine(): string {
        return "....Engine is Stopping";
    }
}

export class Truck {
    constructor () {}

    public TransportLoad(weigthInTons:number):string {
        return "Transporting " + weigthInTons.toString() + " tonnes";
    }
}

export class ContainerTruck{}
export interface ContainerTruck extends Engine, Truck{};
//create function to bundel the definitions of members in Engine & Truck
function mixEngineAndTruck(derivedCtor: any, constructors:any[]){
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name)=>{
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype,name)||
                Object.create(null)
            )
        })
    });
}

mixEngineAndTruck(ContainerTruck, [Engine, Truck]);