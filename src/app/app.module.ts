import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BaseComponentModule } from './components/base-component/base.module';
import { CommonService } from '../services/common-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BaseComponentModule
  ],
  //   providers: [CommonService],
  bootstrap: [AppComponent],
    providers: [
    provideAnimationsAsync(),
    CommonService
    ]
})
export class AppModule { }
