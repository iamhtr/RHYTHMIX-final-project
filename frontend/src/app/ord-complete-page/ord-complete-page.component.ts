import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ord-complete-page',
  templateUrl: './ord-complete-page.component.html',
  styleUrls: ['./ord-complete-page.component.css']
})
export class OrdCompletePageComponent {
  //set title of page
  public constructor(private titleService: Title){
    this.titleService.setTitle("Order completed - Rhythmix"); 
  }
}
