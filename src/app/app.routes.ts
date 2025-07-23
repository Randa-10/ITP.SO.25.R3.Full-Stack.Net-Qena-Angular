import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Parent } from './components/parent/parent';
import { Notfound } from './components/notfound/notfound';
import { ProductsDetials } from './components/products-detials/products-detials';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import { ReactivForm } from './components/reactiv-form/reactiv-form';
import { userGuard } from './Gaurds/user-guard';

export const routes: Routes = [
 //default routes
    {path:'',redirectTo:'home',pathMatch:'full'} ,  //localhost:4200  ==>url 
    {path:'home',component:Home,title:"home page"},  //  /home
    {path:'product-parent',component:Parent,title:'product page',
        canActivate:[userGuard]
    }, //  /product
    //dynamic route :idFromDb
    {path:'product-parent/:idFromDb',component:ProductsDetials},
    // {path:'signUp',component:TemplateDrivenForm},
    {path:'signUp',component:ReactivForm},


    //wild card route
    //not found  **
    {path:'**' ,component:Notfound}

];
