import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// it is necesserly for getting api
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import .. after BrowserModule
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
