import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  //set title of page
  public constructor(private titleService: Title){
    this.titleService.setTitle("Contact us - Rhythmix"); 
  }
}
