import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/primeng';
import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { IProductList, IProduct } from './product-list-i';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {
  forestImg = 'assets/images/topsection-background.png';
  description: string[] = [
    '300 GRAMS OF PRIMALOFT® ONE INSULATION',
    'SCHOELLER® MICROFIBER SHELL',
    'DIAGONAL QUILTING',
    'MICROFIBER RIPSTOP LINER',
    'ZIPPER GARAGE AT COLLAR',
    'ANCHORED BOTTOM-HEM ADJUSTERS',
    '3-IN-1 FRONT POCKETS',
    'ZIPPERED CHEST POCKET',
    'TWO INTERIOR ZIPPERED POCKETS',
    'MADE IN THE PHILIPPINES'
  ];
  products: IProduct[] = [
    {
      'name': 'Tough Mojo Jacket®',
      'starRating': 4.2,
      'frontImg': 'assets/images/tough-mojo-jacket-img1.png',
      'backImg': 'assets/images/tough-mojo-jacket-img2.png',
      'storyDescription': [ 'Our most insulated jacket to date, the city-styled Highline is designed to keep you warm during the deep freeze of winter.', 'With 300 grams of PrimaLoft® ONE insulation, the Highline offers incredible heat retention while remaining form fitting and low volume—essentially all the warmth of a puffer jacket with all the puff. Its outer shell is made from a water-resistant Schoeller® microfiber fabric that has been diagonally quilted, while its inside liner is made from a silky-soft microfiber ripstop nylon.', 'The Highline features a zipper garage to prevent a cold metal zipper from pressing against your neck, non-quilted side panels and underarms for a sleeker fit, and anchored bottom-hem adjusters for a snug fit. It has two uniquely designed 3-in-1 front pockets, which include a top-zippered entrance, a drop pocket with donut snap, and a side hand-warmer. Additional storage can be found in its exterior chest pocket and two interior zippered pockets.'
      ],
    }
  ];


  // display: boolean = false;

  // showDialog() {
  //   this.display = true;
  // }

  constructor() { }
  ngOnInit() {
  }

}
