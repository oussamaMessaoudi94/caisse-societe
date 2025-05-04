import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
loginUrl = 'http://localhost:3000/login'
  constructor(private httpClient: HttpClient) { }

  signup(user:any){
    return this.httpClient.post<{message:any}>(`${this.loginUrl}/signup`, user)
  }

  login(user:any){
    return this.httpClient.post<{use: any, message:any}>(`${this.loginUrl}/login`, user)
  }
}
