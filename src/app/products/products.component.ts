import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }
  //

  findAll(){
    this.productsService.findAll().subscribe(response=> {
      console.log(response);
    })
  }

  findOne(){
    this.productsService.findOne(1).subscribe(response=> {
      console.log(response);
    })
  }
  create(payload:any){
    this.productsService.create(null).subscribe(response=> {
      console.log(response);
    })
  }

  update(payload:any){
    this.productsService.update(1,null).subscribe(response=> {
      console.log(response);
    })
  }
  delete(){
    this.productsService.delete(1).subscribe(response=> {
      console.log(response);
    })
  }

}
