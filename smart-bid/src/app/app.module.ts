import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//routing
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing } from './app.routing';


//compenent
import { AppComponent }     from './app.component';
import { HomeComponent }    from './public_user/home/home.compenent';
import { HeaderComponent }  from './header.component';
import { FooterComponent }  from './footer.component';
import { SigninComponent }  from './public_user/signin/signin.component';
import { SignupComponent }  from './public_user/signup/signup.component';
import { AuctionComponent } from './public_user/auction/auction.component';
//services
import { AuctionService }  from './services/auction.service';
import { UserService }  from './services/user.service';
//Global config
import { Globals }  from './global';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    AuctionComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [
    AuctionService,
    UserService,
    Globals,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
