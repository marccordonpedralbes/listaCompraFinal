import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private router: Router) { }

  goMenu(){
    this.router.navigate(['/menu-sem']);
    
  }

  goHome(){
    this.router.navigate(['/home']);
  }
  goCesta(){
    this.router.navigate(['/cesta']);
  }
  goContacta(){
    this.router.navigate(['/contacta-nosotros']);
  }

}
