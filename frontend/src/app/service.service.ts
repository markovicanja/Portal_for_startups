import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  login(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/login`, data);
  }

  getStartup(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/getStartup`, data);
  }

  getInvestor(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/getInvestor`, data);
  }
    
}
