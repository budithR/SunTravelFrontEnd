import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel';
import { HotelService } from './hotel.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contract } from './contract/contract';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public hotels: Hotel[] = [];
  public hotel!: Hotel;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  title = 'Contract Manager';

  constructor(private hotelservice: HotelService){}

  ngOnInit() {
    this.getHotels();
    
  }

  public getHotels(): void {
    this.hotelservice.getHotels().subscribe(
      (response: Hotel[]) => {
        this.hotels = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
  public findHotelByName(hotelName: String): void {
    this.hotelservice.findHotelByName(hotelName).subscribe(
      (response: Hotel) => {
        this.hotel = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  

  

  

  public onAddContract(addFrom: NgForm): void {
    
  }                                                                                                                                                                                                                                                                                                                                                                                                                  

  public onOpenModal(contracts: Contract, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add'){
      button.setAttribute('data-target', '#addContractModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onOpenModalAddHotel(mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add'){
      button.setAttribute('data-target', 'addContractModal');
    }
    container?.appendChild(button);
    button.click();
  }

  formData = {
    hotelName: '',
    age: null
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      // Form is valid, perform form submission logic
      console.log('Form submitted:', this.formData);
    } else {
      // Form is invalid, display error messages or take appropriate action
      console.log('Form is invalid');
    }
  }

}

