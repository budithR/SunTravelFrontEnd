import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelService } from './hotel.service';
import { HttpClientModule } from '@angular/common/http';
import { ContractComponent } from './contract/contract.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddContractFormComponent } from './add-contract-form/add-contract-form.component';
import { SearchComponent } from './search/search.component';
import { ExistingHotelAddContractComponent } from './existing-hotel-add-contract/existing-hotel-add-contract.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    RoomTypeComponent,
    NavBarComponent,
    AddContractFormComponent,
    SearchComponent,
    ExistingHotelAddContractComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
