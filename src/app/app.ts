import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Products } from "./components/products/products";

//class decorator
//meta data 
@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Footer, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dotnet-ecommerce-standalone');
}
