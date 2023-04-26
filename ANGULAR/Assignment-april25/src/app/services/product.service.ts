import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getOrder():Observable<any> {
    return this.http.get("http://localhost:3000/products/")
  }


  getDetailsById(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/products/" + id);
  }
  
}
