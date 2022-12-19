import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Adapters} from "../enoum/enoum";
import {ProductService} from "../services/product.services";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class productComponent {
  id: number = 0;
  product: any = {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    thumbnail: Adapters.BASE_URL+ 'data/products/1/thumbnail.jpg'
  }

  constructor(private route: ActivatedRoute,
              private productService: ProductService){
  }
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.getProduct();
    })
  }
  /// call API:  https://dummyjson.com/products/ + this.id
  getProduct(){
    // call api
    this.productService.getProductDetail(this.id)
      .subscribe(data=>{
        // set data to product
        this.product = data;
      })

  }
}
