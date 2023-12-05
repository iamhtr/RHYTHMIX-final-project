import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-allblog',
  templateUrl: './allblog.component.html',
  styleUrls: ['./allblog.component.css']
})
export class AllblogComponent {
  //set title of page
  public constructor(private titleService: Title){
    this.titleService.setTitle("Blogs - Rhythmix"); 
  }

  changeBackground(id: string) {
    const div = document.getElementById(id);
    const button = div?.querySelector('button');
    if (div && button) {
      div.style.backgroundColor = '#757575';
      button.style.backgroundColor = '#757575';
      button.style.color = '#FFFFFF';
    }
  }

  resetBackground(id: string) {
    const div = document.getElementById(id);
    const button = div?.querySelector('button');
    if (div && button) {
      div.style.backgroundColor = 'transparent';
      button.style.backgroundColor = 'transparent';
      button.style.color = '#757575';
    }
  }
  changeBackground1(id: string) {
    const div = document.getElementById(id);
    const button = div?.querySelector('button');
    if (div && button) {
      div.style.backgroundColor = 'transparent';
      button.style.backgroundColor = 'transparent';
      button.style.color = '#757575';
    }
  }

  resetBackground1(id: string) {
    const div = document.getElementById(id);
    const button = div?.querySelector('button');
    if (div && button) {
      div.style.backgroundColor = '#757575';
      button.style.backgroundColor = '#757575';
      button.style.color = '#FFFFFF';
    }
  }
}