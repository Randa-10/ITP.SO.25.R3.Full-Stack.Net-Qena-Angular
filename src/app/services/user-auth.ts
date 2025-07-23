import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {
  

  login(userName:string,pass:string){
    //call api 
    //token
    let token="12368888888"
    localStorage.setItem("userToken",token)
  }
  logout(){
    localStorage.removeItem("userToken")

  }
 get isUserLogged():boolean{
    return localStorage.getItem('userToken')?true:false
  }
}
