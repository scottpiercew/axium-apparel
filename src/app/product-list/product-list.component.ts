import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {
  productFrontImg: string = "assets/images/tough-mojo-jacket-img1.png";
  productBackImg: string = "assets/images/tough-mojo-jacket-img2.png";
  productTitle: string = "Tough Mojo Jacket";


  // display: boolean = false;

  // showDialog() {
  //   this.display = true;
  // }

  constructor() { }
  ngOnInit() {
  }

}
