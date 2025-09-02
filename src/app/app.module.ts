import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { UserMenuComponent } from './core/header/user-menu/user-menu.component';
import { CartButtonComponent } from './core/header/cart-button/cart-button.component';
import { CartComponent } from './core/header/cart/cart.component';
import { SearchComponent } from './core/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserMenuComponent,
    CartButtonComponent,
    CartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
