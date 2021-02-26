import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { PrimeNgModule} from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
  AppRoutingModule,
  BrowserModule,
  PrimeNgModule,
  SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
