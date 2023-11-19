import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  initSlider(): void {
    const DSA = document.querySelector(".slide .dsa") as HTMLElement;
    const slideButtons = document.querySelectorAll(".slide .slidebutton") as NodeListOf<HTMLElement>;
    const DSS = document.querySelector(".slide1 .dsb") as HTMLElement;
    const slideButtons1 = document.querySelectorAll(".slide1 .slidebutton") as NodeListOf<HTMLElement>;
    const DSN = document.querySelector(".slide2 .dsn") as HTMLElement;
    const slideButtons2 = document.querySelectorAll(".slide2 .slidebutton") as NodeListOf<HTMLElement>;
  
    if (DSA) {
      const maxScrollLeftDSA = DSA.scrollWidth - DSA.clientWidth;
  
      slideButtons.forEach(button => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = DSA.clientWidth * direction;
          DSA.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });
  
      const handleSlideButtonsDSA = () => {
        slideButtons[0].style.display = DSA.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = DSA.scrollLeft >= maxScrollLeftDSA ? "none" : "block";
      };
  
      DSA.addEventListener("scroll", handleSlideButtonsDSA);
    }
  
    if (DSS) {
      const maxScrollLeftDSS = DSS.scrollWidth - DSS.clientWidth;
  
      slideButtons1.forEach(button => {
        button.addEventListener("click", () => {  
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = DSS.clientWidth * direction;
          DSS.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });
  
      const handleSlideButtonsDSS = () => {
        slideButtons1[0].style.display = DSS.scrollLeft <= 0 ? "none" : "block";
        slideButtons1[1].style.display = DSS.scrollLeft >= maxScrollLeftDSS ? "none" : "block";
      };
  
      DSS.addEventListener("scroll", handleSlideButtonsDSS);
    }
    if (DSN) {
      const maxScrollLeftDSS = DSN.scrollWidth - DSN.clientWidth;
  
      slideButtons2.forEach(button => {
        button.addEventListener("click", () => {  
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = DSN.clientWidth * direction;
          DSN.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });
  
      const handleSlideButtonsDSN = () => {
        slideButtons2[0].style.display = DSN.scrollLeft <= 0 ? "none" : "block";
        slideButtons2[1].style.display = DSN.scrollLeft >= maxScrollLeftDSS ? "none" : "block";
      };
  
      DSS.addEventListener("scroll", handleSlideButtonsDSN);
    }

  }
  
  ngOnInit(): void {
    window.addEventListener("load", this.initSlider.bind(this));
  }
}