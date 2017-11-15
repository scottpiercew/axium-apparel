import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SiteHeaderComponent implements OnInit {
  mainLogo: string = 'assets/images/axiom-logo-main.png'
  searchIcon: string = 'assets/images/search-icon.png'
  fbIcon: string = 'assets/images/fb-icon.png'
  twitterIcon: string = 'assets/images/twitter-icon.png'

  constructor() { }

  ngOnInit() {
  }

}
