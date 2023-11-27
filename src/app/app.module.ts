import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { ListPipe } from './list-product/list.pipe';      //nhập này nè
import { FilterPipe } from './list-product/filter.pipe';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AccountComponent } from './account/account.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { AccInfoComponent } from './account/acc-info/acc-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PaymentComponent,
    AboutusComponent,
    SignupComponent,
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    CartComponent,
    ListProductComponent,
    AccInfoComponent,
    AccountComponent,
    BlogDetailComponent,
    FilterPipe,
    ListPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faIcons);
  }
}