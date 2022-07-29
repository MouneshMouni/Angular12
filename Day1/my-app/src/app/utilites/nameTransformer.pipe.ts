import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'nameTransformer'})

export class NameTransformerPipe implements PipeTransform{

    transform(value: any) {
       let fullName = value;
       if(value) {
        const firstName:string = fullName.split(' ')[0];
        const lastName:string = fullName.split(' ')[1];
        fullName = lastName.charAt(0).toUpperCase() + lastName.slice(1) + ',' +
        firstName.charAt(0).toUpperCase() + firstName.slice(1)
       }
       return fullName;
    }
    
}