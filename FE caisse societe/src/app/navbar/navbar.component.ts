import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
token:any ={}
  constructor (private router: Router) {}

  ngOnInit () {
    const decodeToken = (token: string | null)=>{
      if (!token) {
        return null
      }
      return jwtDecode(token)
    }
 const Token = localStorage.getItem('token')
 this.token = decodeToken(Token)
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate([`/`])
  }
}
