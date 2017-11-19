import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-site-header></app-site-header>
      <app-site-nav></app-site-nav>
      <app-product-list></app-product-list>
      <app-site-footer></app-site-footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Axium Apparel';
}
