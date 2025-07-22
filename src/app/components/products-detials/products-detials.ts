import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProoductStatic } from '../../services/prooduct-static';
import { Iproducts } from '../../Models/iproducts';

@Component({
  selector: 'app-products-detials',
  imports: [],
  templateUrl: './products-detials.html',
  styleUrl: './products-detials.css'
})
export class ProductsDetials {
  //step===> get id from url
  currentId:number=0
prop:Iproducts|undefined
  constructor(private activeRoute:ActivatedRoute,private prdStatic:ProoductStatic){
  this.currentId= Number(this.activeRoute.snapshot.paramMap.get('idFromDb'))

  this.prop=this.prdStatic.getDataById(this.currentId)
  console.log(this.prop);
  
  }

}
