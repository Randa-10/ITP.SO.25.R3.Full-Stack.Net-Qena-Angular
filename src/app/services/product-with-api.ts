import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Iproducts } from '../Models/iproducts';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductWithApi {

  constructor( private http:HttpClient ){

  }
  
  getAllData():Observable<Iproducts[]>{
    //get<type>(url)
    return this.http.get<Iproducts[]>(`${environment.baseUrl}products`)

  }
  getDataById(prdID:number):Observable<Iproducts>{
return this.http.get<Iproducts>(`${environment.baseUrl}products/${prdID}`)
  }
  search(value:string) :Observable <Iproducts[]>{
    return this.http.get<Iproducts[]>(`${environment.baseUrl}products?productName=${value}`)

  }
  addproduct(){
    
  }
}
