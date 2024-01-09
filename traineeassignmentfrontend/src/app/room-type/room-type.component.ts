import { Component } from '@angular/core';
import { RoomType } from './roomType';
import { RoomTypeService } from './roomType.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent {
  public roomTypes: RoomType[] = [];
  

  constructor(private roomTypeService: RoomTypeService){}

  ngOnInit() {
    this.getRoomTypes();
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

  
}
