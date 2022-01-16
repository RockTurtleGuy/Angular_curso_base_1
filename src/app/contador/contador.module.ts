import { NgModule } from "@angular/core";
 import { ContadorComponent } from './contador/contador.componente';
@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadorModuel{}
