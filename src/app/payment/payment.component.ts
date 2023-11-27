import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TredingPhhtpService } from '../treding-phhtp.service';
import { TredingP } from '../treding-p';


interface DateSelection {
  month: string;
  year: string;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {

  public dateSelection: DateSelection = { month: '', year: '' };
  public months: { value: string; label: string }[] = [];
  public years: string[] = [];



  initPayment(): void {
    const COD = document.getElementById('COD') as HTMLInputElement;
    const CardNumber = document.getElementById('CardNumber') as HTMLInputElement;
    const ExpirationMonth = document.getElementById('ExpirationMonth') as HTMLInputElement;
    const ExpirationYear = document.getElementById('ExpirationYear') as HTMLInputElement;
    const CVV = document.getElementById('CVV') as HTMLInputElement;
    const Banking = document.getElementById('Banking') as HTMLInputElement;
  
    COD.addEventListener('change', () => {
      if (COD.checked) {
        CardNumber.disabled = true;
        ExpirationMonth.disabled = true;
        ExpirationYear.disabled = true;
        CVV.disabled = true;
      } else {
        CardNumber.disabled = false;
        ExpirationMonth.disabled = false;
        ExpirationYear.disabled = false;
        CVV.disabled = false;
      }
    });
  
    Banking.addEventListener('change', () => {
      if (Banking.checked) {
        ExpirationMonth.disabled = true;
        ExpirationYear.disabled = true;
        CVV.disabled = true;
      } else {
        ExpirationMonth.disabled = false;
        ExpirationYear.disabled = false;
        CVV.disabled = false;
      }
    });
  }

  private populateMonths(): void {
    for (let i = 1; i <= 12; i++) {
      const month = {
        value: i.toString().padStart(2, '0'),
        label: new Date(0, i - 1).toLocaleString('default', { month: 'short' })
      };
      this.months.push(month);
    }
  }

  private populateYears(): void {
    const currentYear = new Date().getFullYear();
    const startYear = 1990;
    const endYear = 2300;

    for (let i = startYear; i <= endYear; i++) {
      this.years.push(i.toString());
    }
  }

  public handleDateChange(): void {
    console.log(this.dateSelection);
  }

  products: any;

  constructor(private _service: TredingPhhtpService) {
    this._service.getProduct().subscribe((data: TredingP[]) => {
      this.products = data;
      this.populateMonths();
      this.populateYears();
    });
  }

  decreaseBtn!: HTMLElement;
  increaseBtn!: HTMLElement;
  quantityInput!: HTMLInputElement;

  ngOnInit() {
    this.decreaseBtn = document.getElementById('decreaseBtn') as HTMLElement;
    this.increaseBtn = document.getElementById('increaseBtn') as HTMLElement;
    this.quantityInput = document.getElementById('quantityInput') as HTMLInputElement;

    this.decreaseBtn.addEventListener('click', () => {
      let quantity = Number(this.quantityInput.value);
      if (quantity > 1) {
        quantity--;
        this.quantityInput.value = quantity.toString();
      }
    });

    this.increaseBtn.addEventListener('click', () => {
      let quantity = Number(this.quantityInput.value);
      quantity++;
      this.quantityInput.value = quantity.toString();
    });
    this.initPayment();
    
  }
}



