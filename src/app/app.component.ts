import { Component } from '@angular/core';
import {ProductServiceService} from './product-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apiDemo';
  data: any = [];
  constructor(private productService:ProductServiceService) {
    this.productService.getProducts().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }
}
