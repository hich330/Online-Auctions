import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }     from './app.component';
import { HomeComponent }    from './public_user/home/home.compenent';
import { HeaderComponent }  from './header.component';
import { FooterComponent }  from './footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //HeaderComponent,
    //FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
