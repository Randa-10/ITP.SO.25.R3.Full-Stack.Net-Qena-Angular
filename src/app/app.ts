import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';

//class decorator
//meta data 
@Component({
  selector: 'app-root',
  imports: [Navbar, Footer,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dotnet-ecommerce-standalone');
}
