import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sharp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  p: number = 1;
  products = [
    1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
