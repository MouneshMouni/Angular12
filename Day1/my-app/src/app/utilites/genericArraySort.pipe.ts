import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "genericArraySorter",
    pure: true
})

export class GeneticArraySorterPipe implements PipeTransform {
    transform(listObjects: any[], sortProp: string, isAsc: string) {
        if (listObjects) {
            if (isAsc == 'yes') {
                listObjects.sort((a, b) => {
                    return a[sortProp] > b[sortProp] ? -1 : 1;
                });
            } else {
                listObjects.sort((a, b) => {
                    return a[sortProp] < b[sortProp] ? -1 : 1;
                });
            }
        }
        return listObjects;
    }

}