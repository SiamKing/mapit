import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWS-a62mWFf2R2Hq0pd9hncuyUhwNMAVA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// AIzaSyBWS-a62mWFf2R2Hq0pd9hncuyUhwNMAVA
