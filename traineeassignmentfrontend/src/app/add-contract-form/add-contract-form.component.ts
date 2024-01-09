import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { HttpErrorResponse } from '@angular/common/http';
import { RoomType } from '../room-type/roomType';
import { RoomTypeService } from '../room-type/roomType.service';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';
import { Contract } from '../contract/contract';
import { ContractService } from '../contract/contract.service';

@Component({
  selector: 'app-add-contract-form',
  templateUrl: './add-contract-form.component.html',
  styleUrls: ['./add-contract-form.component.css']
})
export class AddContractFormComponent {

  addForm!: FormGroup;
  

  public newlyCreatedContract!: Contract;
  public hotels: Hotel[] = [];
  public roomTypes: RoomType[] = [];
  public contracts: Contract[] = [];
  constructor(private hotelservice: HotelService, private roomTypeService: RoomTypeService, private contractService: ContractService, private formBuilder: FormBuilder){
    
  }


  
  ngOnInit() {
    this.getHotels();
    this.addForm = this.formBuilder.group({
      hotelName: ['', Validators.required],
      roomTypeName: ['', Validators.required],
      maxAdults: [null, Validators.required],
      noOfRooms: [null, Validators.required],
      pricePerPerson: [null, Validators.required],
      markupPrice: ['', Validators.required, Validators.min(5), Validators.max(25)]
      // Other form controls
    });
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


  public changeContractAddLabel(newMessage: string): void {
    const label = document.getElementById('displayContractAddStatus') as HTMLLabelElement;
    label.innerHTML = newMessage;
  }

  public onAddHotel2(addForm: NgForm): void{
    const hotelTem: Hotel = (addForm.value);
    let hotelIDToBeCreated;
    let hotelToBeCreated: Hotel;
    this.hotelservice.addHotel(hotelTem).subscribe(
      (responseHotel: Hotel) => 
      {
        console.log(responseHotel);
        console.log(responseHotel.hotelID);
        hotelIDToBeCreated = responseHotel.hotelID;
        hotelToBeCreated = responseHotel;
        // createRoomType object
        const roomTypeTem: RoomType = {roomTypeID: null, roomTypeName: addForm.value.roomTypeName, maxAdults: addForm.value.maxAdults,
          noOfRooms: addForm.value.noOfRooms, pricePerPerson: addForm.value.pricePerPerson , hotel: responseHotel};
        this.getHotels();
        // addRoomType
        this.roomTypeService.addRoomType(roomTypeTem).subscribe(
          (responseRoomType: RoomType) => {
            console.log(responseRoomType);
            const contractTem: Contract = {
              contractID: null,
              markupPrice: addForm.value.markupPrice,
              startDate: addForm.value.startDate,
              endDate: addForm.value.endDate,
              roomType: responseRoomType,
              hotel: hotelToBeCreated
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
      }
    );
    
    //roomtypeadd
    
    
  }

  public onFindHotel(addForm:NgForm) {
    this.hotelservice.findHotelByName("test25").subscribe(
      (data: Hotel) => {
        console.log(data.hotelID)
      }
    )
  }

  public onSubmitWrapper (addForm:NgForm){
    this.onAddHotel2(addForm);
    // this.onFindHotel(addForm);
    this.addForm.reset();
  }

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
    
  
  

}
