# NGX Magic Modal

This is simple modal plugin for your latest angular project. Very easy to setup and integrate to your angular project.

**>> IMPORTANT: Required angular 5 in your local dependency. Because file uses Renderer2 in the core.**

[Demo](http://iamsubhojit.com/ngx-magic-modal/)

## Installation

`npm install ngx-magic-modal`

or 

`yarn add ngx-magic-modal`

In your "AppModule" file add this plugin

``` TypeScript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// ngx-magic modal added
import { MagicModalModule } from 'ngx-magic-modal';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MagicModalModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
Call the plugin from your component

app.component.html
``` HTML
<magic-modal [(visible)]="display">
    <button (click)="closeDisplay();" style="position: absolute; top: 10px; right: 10px;">X</button>
    Test One
</magic-modal>
<button (click)="changeDisplay();">modal1</button>
```
app.component.ts
``` TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  display: boolean = false;

  changeDisplay(){
    this.display = true;
  }

  closeDisplay(){
    this.display = false; 
  }

}
```
As per "display" property change boolean value change popup will toggle show hide state.

## Version
Current - v0.1.1

## Note
You feel free to contribute or find issue.

### *Chanege the popup as per your application ui and do fun :)*
