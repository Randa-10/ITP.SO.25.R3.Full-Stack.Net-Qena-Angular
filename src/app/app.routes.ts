import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Parent } from './components/parent/parent';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
 //default routes
    {path:'',redirectTo:'home',pathMatch:'full'} ,  //localhost:4200  ==>url 
    {path:'home',component:Home,title:"home page"},  //  /home
    {path:'product-parent',component:Parent,title:'product page'}, //  /product

    //wild card route
    //not found  **
    {path:'**' ,component:Notfound}

];
