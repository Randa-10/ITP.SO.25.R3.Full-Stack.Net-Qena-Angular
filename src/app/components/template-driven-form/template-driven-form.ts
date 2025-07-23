import { Component } from '@angular/core';
import { User } from '../../services/user';
import { Iuser } from '../../Models/iuser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm {

userProp:Iuser={} as Iuser

  constructor(private userService:User){

  }
  AddUser(){
// let u :Iuser={
//   fname:'Rana',
//   email:"rana@gmail"
//   ,password
//   :"2222"
// }

this.userService.addNewUser(this.userProp).subscribe((data)=>{
  console.log(data);
  
}
,
(err)=>{
  console.log(err);
  

  
})

  }
}
