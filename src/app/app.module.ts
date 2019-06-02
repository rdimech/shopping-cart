import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Api } from './services/api.services';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './app.component';

@NgModule({
  declarations: [
    CartService
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [Api],
  bootstrap: [CartService]
})
export class AppModule { }
