import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Parent } from './components/parent/parent';
import { RouterOutlet } from '@angular/router';

//class decorator
//meta data 
@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Footer, Parent,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dotnet-ecommerce-standalone');
}
