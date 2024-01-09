import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { RoomType } from './roomType';




@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getRoomTypes(): Observable<RoomType[]>{
    return this.http.get<RoomType[]>(`${this.apiServerUrl}/roomtype/all`);
  }

  public addRoomType(roomType: RoomType){
    return this.http.post<RoomType>(`${this.apiServerUrl}/roomtype/add`, roomType);
  }

  public findRoomTypeByMaxAdults(maxAdults: Number): Observable<RoomType>{
    return this.http.get<RoomType>(`${this.apiServerUrl}/roomtype/findByMaxAdults/${maxAdults}` );
  }

  public findRoomTypeByRoomTypeID(roomTypeID: Number): Observable<RoomType>{
    return this.http.get<RoomType>(`${this.apiServerUrl}/roomtype/findByRoomTypeID/${roomTypeID}` );
  }


}