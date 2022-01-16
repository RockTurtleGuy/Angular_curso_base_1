import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 heroes: string[] = ['Megaman', 'Roll', 'Protoman', 'Colonel'];

 heroeBorrado: string= '';

 borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';   
 }
 

}
