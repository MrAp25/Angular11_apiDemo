import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) {

  }
  getProducts(){
    let url="https://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
  }
}
