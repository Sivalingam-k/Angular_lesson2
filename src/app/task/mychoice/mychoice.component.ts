import { Component } from '@angular/core';

@Component({
  selector: 'app-mychoice',
  standalone: true,
  imports: [],
  templateUrl: './mychoice.component.html',
  styleUrl: './mychoice.component.css'
})
export class MychoiceComponent {

   myInput:string="Checkbox"
   samosa:string="Samosa"
   Dosa:string="Dosa"
   idlyVada:string="Idly Vada"

   Samosa_click(){
    window.alert("This is : samosa")
   }
   Dosa_click(){
    window.alert("This is : Dosa")
   }
   Sidly_click(){
    window.alert("This is : IDlyVada")
   }
}
