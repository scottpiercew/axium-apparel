import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SiteHeaderComponent implements OnInit {
  mainLogo = 'assets/images/axiom-logo-main.png';
  searchIcon = 'assets/images/search-icon.png';
  fbIcon = 'assets/images/fb-icon.png';
  twitterIcon = 'assets/images/twitter-icon.png';

  constructor() { }

  ngOnInit() {
  }

}
