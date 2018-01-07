import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display: boolean = false;
  display2: boolean = false;

  changeDisplay(){
    this.display = true;
  }

  closeDisplay(){
    this.display = false; 
  }


  changeDisplay2(){
    this.display2 = true;
  }

  closeDisplay2(){
    this.display2 = false; 
  }

}
