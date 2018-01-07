import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import our module 
import { MagicModalModule } from './modules/magic-modal/magic-modal.module';
// import { MagicModalModule } from '../../magic';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
