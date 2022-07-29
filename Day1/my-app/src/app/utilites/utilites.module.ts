import { NgModule } from "@angular/core";
import { GeneticArraySorterPipe } from "./genericArraySort.pipe";
import { HighligthDirective } from "./higlight.directive.component";
import { IfNotDirective } from "./ifNot.directive.component";
import { NameTransformerPipe } from "./nameTransformer.pipe";

@NgModule({
    declarations:[NameTransformerPipe, GeneticArraySorterPipe, IfNotDirective, HighligthDirective],
    exports:[NameTransformerPipe, GeneticArraySorterPipe, IfNotDirective, HighligthDirective],
    providers: []
})

export class UtilitesModule {}