import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  //set title of page
  public constructor(private titleService: Title){
    this.titleService.setTitle("Account - Rhythmix"); 
  }
}
