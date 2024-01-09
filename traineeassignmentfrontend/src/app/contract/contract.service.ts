import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Contract } from './contract';




@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getContracts(): Observable<Contract[]>{
    return this.http.get<Contract[]>(`${this.apiServerUrl}/contract/all`);
  }

  public addContract(contract: Contract): Observable<Contract>{
    return this.http.post<Contract>(`${this.apiServerUrl}/contract/add`, contract);
  }

  public findContractByHotelID(hotelID: Number): Observable<Contract>{
    return this.http.get<Contract>(`${this.apiServerUrl}/contract/findByHotelID/${hotelID}` );
  }

  public findContractByRoomTypelID(roomTypeID: Number): Observable<Contract>{
    return this.http.get<Contract>(`${this.apiServerUrl}/contract/findByRoomTypeID/${roomTypeID}` );
  }

  public findContractByContractID(contractID: number): Observable<Contract>{
    return this.http.get<Contract>(`${this.apiServerUrl}/contract/findContractByContractID/${contractID}`);
  }


}