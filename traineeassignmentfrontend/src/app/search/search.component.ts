import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Search } from './search';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { RoomType } from '../room-type/roomType';
import { ContractService } from '../contract/contract.service';
import { Contract } from '../contract/contract';
import { RoomTypeOut } from './roomTypeOut';
import { ContractOut } from './contractOut';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  addForm!: FormGroup;

  public showNotAvailableContent = false;

  public roomTypeOut: RoomTypeOut[][] = [];

  public checkingDate!: Date;

  public noOfNights!: Number;

  public backendOutArray: number[][] = [];

  public contractOutArray: ContractOut [] = [];
  
  rooms: number[] = []; //Array to store rooms want

  formData: any = {}; // Replace 'any' with your form data interface or class

  constructor(private searchService: SearchService, private hotelService: HotelService, private contractService: ContractService, private formBuilder: FormBuilder){} //Constructor

  ngOnIt() {
    this.addForm = this.formBuilder.group({
      noOfNights: [null, Validators.required],
      // Other form controls
    });
  }

  // Create an array to hold the dynamic form elements
  formElements: { label: string, controlName: string }[] = [
    { label: 'Room 1', controlName: 'noOfAdults1' }
  ];
  inputFieldCounter = 2;

  // Method to add a new label and input field
  addFormField(label: string, controlName: string) {
    const uniqueControlName  = controlName + this.inputFieldCounter;
    const uniqueLabel = label + ' ' + this.inputFieldCounter;
    this.inputFieldCounter++;
    this.formElements.push({ label: uniqueLabel, controlName: uniqueControlName });
    this.formData[uniqueControlName] = '';
  }

  // Method to remove a label and input field
  removeFormField(index: number) {
    const controlName = this.formElements[index].controlName;
    this.formElements.splice(index, 1);
    delete this.formData[controlName];
    this.inputFieldCounter--;
  }



  onSubmit(form: NgForm) {

    this.showNotAvailableContent = true;
      this.rooms = Object.values(this.formData);
      let checkingDate: Date = form.value.checkingDate;
      this.checkingDate = form.value.checkingDate;
      let noOfNights: number = form.value.noOfNights;
      this.noOfNights = form.value.noOfNights;
      let search: Search = {roomArray: this.rooms, checkingDate: form.value.checkingDate, noOfNights: form.value.noOfNights};

      console.log(this.rooms);
      console.log(checkingDate);
      console.log(noOfNights);
      this.searchService.getSearch(search).subscribe(
        (contractOutArray: ContractOut []) => {
          this.contractOutArray = contractOutArray;
          console.log(contractOutArray);
          
          for(let i = 0; i<contractOutArray.length; i++){
            this.roomTypeOut[i]=(contractOutArray[i].roomTypeOut);
            console.log(this.roomTypeOut);
          }
        
          
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
        

      )
      
    

    
    
  }
  

  
  
  

}
