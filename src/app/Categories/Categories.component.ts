import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Adapters} from "../enoum/enoum";
import  {ProductService} from "../services/product.services";
@Component({
  selector: 'app-categories',
  templateUrl:'./Categories.component.html'
})
export class categoriesComponent{
  products: any = [];
  limit: number = Adapters.LIMIT;
  constructor(private productService: ProductService){

  }

  ngOnInit(){
      this.getProducts();
  }

  getProducts(){
    this.productService.getProducts(this.limit).subscribe(data=>{
        this.products = data.products;
    })
  }

  LoadMore(){
    this.limit+=10;
    this.getProducts();
  }
}
