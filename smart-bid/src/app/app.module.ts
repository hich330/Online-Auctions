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
//services
import { AuctionService }  from './services/auction.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [
    AuctionService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
