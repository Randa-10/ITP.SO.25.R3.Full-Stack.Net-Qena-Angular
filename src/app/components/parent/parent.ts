import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';
import { Iproducts } from '../../Models/iproducts';

@Component({
  selector: 'app-parent',
  imports: [Products,FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
filterByNameInParent:string=''
prdList:Iproducts[]=[]
addToCartInParent(prdParent:Iproducts){
  console.log(prdParent);
  
  let obj=this.prdList.find((prd)=>prd.id==prdParent.id)
  if(obj){
    obj.productQuantity++
  }else{
    this.prdList.push({...prdParent,productQuantity:1})
  }

}


}
