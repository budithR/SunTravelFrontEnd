import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getHotels(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(`${this.apiServerUrl}/hotel/all`);
  }

  public addHotel(hotelJson: Hotel){
    return this.http.post<Hotel>(`${this.apiServerUrl}/hotel/add`, hotelJson);
  }

  public findHotelByName(hotelName: String){
    return this.http.get<Hotel>(`${this.apiServerUrl}/hotel/findHotelByHotelName/${hotelName}` );
  }
  public findHotelByHotelID(hotelID: number){
    return this.http.get<Hotel>(`${this.apiServerUrl}/hotel/findHotelByHotelID/${hotelID}`);
  }

}
