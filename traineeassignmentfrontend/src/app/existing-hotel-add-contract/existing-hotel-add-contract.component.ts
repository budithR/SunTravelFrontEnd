import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from '../hotel';
import { HttpErrorResponse } from '@angular/common/http';
import { Contract } from '../contract/contract';
import { ContractService } from '../contract/contract.service';
import { HotelService } from '../hotel.service';
import { RoomType } from '../room-type/roomType';
import { RoomTypeService } from '../room-type/roomType.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-existing-hotel-add-contract',
  templateUrl: './existing-hotel-add-contract.component.html',
  styleUrls: ['./existing-hotel-add-contract.component.css']
})
export class ExistingHotelAddContractComponent {

  

  //form validation function
  formData = {
    hotelName: '',
    roomTypeName: '',
    maxAdults: null,
    noOfRooms: null,
    pricePerPerson: null,
    markupPrice: null
    
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
  //end

  public newlyCreatedContract!: Contract;
  public hotel!: Hotel;
  public hotels: Hotel[] = [];
  public roomTypes: RoomType[] = [];
  public contracts: Contract[] = [];
  public selectedHotelName: String ='';
  constructor(private hotelservice: HotelService, private roomTypeService: RoomTypeService, private contractService: ContractService){}


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

  public getRoomTypes(): void {
    this.roomTypeService.getRoomTypes().subscribe(
      (response: RoomType[]) => {
        this.roomTypes = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public getContracts(): void {
    this.contractService.getContracts().subscribe(
      (response: Contract[]) => {
        this.contracts = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  onOptionChange(){
    console.log(this.selectedHotelName);
  }


  //Adding contract part
  public onAddContract(addForm: NgForm): void{
    const hotelNameTem: string = (addForm.value.hotelName)
    let hotelTemp: Hotel;

    this.hotelservice.findHotelByName(hotelNameTem).subscribe(
      (responseHotel: Hotel) => {
        hotelTemp = responseHotel;
        this.hotel = responseHotel;
        const roomTypeTem: RoomType = {roomTypeID: null, roomTypeName: addForm.value.roomTypeName, maxAdults: addForm.value.maxAdults,
          noOfRooms: addForm.value.noOfRooms, pricePerPerson: addForm.value.pricePerPerson , hotel: hotelTemp};
          this.roomTypeService.addRoomType(roomTypeTem).subscribe(
            (responseRoomType: RoomType) => {
              console.log(responseRoomType);
              const contractTem: Contract = {
                contractID: null,
                markupPrice: addForm.value.markupPrice,
                startDate: addForm.value.startDate,
                endDate: addForm.value.endDate,
                roomType: responseRoomType,
                hotel: hotelTemp
              }
              this.getRoomTypes();
              // addContract
              this.contractService.addContract(contractTem).subscribe(
                (responseContract: Contract) => {
                  console.log(responseContract);
                  this.newlyCreatedContract = responseContract;
                  this.getContracts();
                  this.changeContractAddLabel("Contract added successfully"); // Change label
                },
                (error: HttpErrorResponse) => {
                  alert(error.message);
                }
              )
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
          console.log(roomTypeTem);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
    
  }

  //change contract add status label
  public changeContractAddLabel(newMessage: string): void {
    const label = document.getElementById('displayContractAddStatus') as HTMLLabelElement;
    label.innerHTML = newMessage;
  }
}
