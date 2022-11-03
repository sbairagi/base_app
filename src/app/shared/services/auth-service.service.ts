import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

   httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  constructor(private http : HttpClient) {
    
   }

  login(){
    let formdata = {
      'username': 'admin',
      'password': 'admin',
    }
    return this.http.post('http://localhost:8000/' + 'djrestauth/login/' , formdata, {withCredentials:true})
  }
  
  refreshtoken(){
    return this.http.post('http://localhost:8000/' + 'djrestauth/token/refresh/', {} , {withCredentials:true})
  }



  category(){
    let formdata = {
      'name': 'shubham',
    }
    return this.http.get('http://localhost:8000/' + 'shop/product/', {withCredentials:true})
  }

}
