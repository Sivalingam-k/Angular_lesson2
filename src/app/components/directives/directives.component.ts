import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  hasValue:boolean=true;
 isCondition:boolean=true;

 frontEnd:string[]=["HTML","CSS","JAVASCRIPT","SASS","REACT"]
 selectedCourse:string="HTML";
 employee:any[]=[
  {id:101, name:"Siva",post:"Developer",Company:"ChangePond" },
  {id:102, name:"Basil",post:"Python Developer",Company:"ChangePond" },
  {id:103, name:"Eashwar",post:"Tester",Company:"ChangePond" },
  {id:104, name:"Sandeep",post:"Developer",Company:"ChangePond" },
  {id:105, name:"Dharnesh",post:"Database",Company:"ChangePond" }
 ]

 greeting(values:string){
  window.alert("You are selected : "+values)
}
}
