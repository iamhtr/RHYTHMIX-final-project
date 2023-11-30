import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {
  //set title of page
  public constructor(private titleService: Title){
    this.titleService.setTitle("Hoang Thuy Linh scoops Best Asian Artist Vietnam title at MAMA 2019 - Rhythmix"); 
  }
}
