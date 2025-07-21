import { Component } from '@angular/core';
import { ImgStyle } from '../../Directives/img-style';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ImgStyle,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
