import { Component } from '@angular/core';
import { User } from '../../services/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactiv-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiv-form.html',
  styleUrl: './reactiv-form.css'
})
export class ReactivForm {

userProp:FormGroup
  constructor(private userService:User ,private fb:FormBuilder){
this.userProp=new FormGroup({
  fname:new FormControl('',[Validators.required,Validators.minLength(3)]),
  email:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
})

  }

get fnameMethod(){
  return this.userProp.get('fname')
}
get emailMethod(){
  return this.userProp.get('email')
}

get passwordMethod(){
  return this.userProp.get('password')
}

    AddUser( ){
// let u :Iuser={
//   fname:'Rana',
//   email:"rana@gmail"
//   ,password
//   :"2222"
// }

this.userService.addNewUser(this.userProp.value).subscribe((data)=>{
  console.log(data);
  
}
,
(err)=>{
  console.log(err);
  

  
})

  }
}
