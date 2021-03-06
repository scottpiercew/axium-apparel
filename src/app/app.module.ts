import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SiteNavComponent } from './site-nav/site-nav.component';
import { KeysPipe } from './shared/grab-keys.pipe';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    ProductListComponent,
    SiteNavComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
