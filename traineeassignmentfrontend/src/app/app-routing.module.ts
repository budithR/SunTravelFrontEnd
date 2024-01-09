import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract/contract.component';
import { AddContractFormComponent } from './add-contract-form/add-contract-form.component';
import { SearchComponent } from './search/search.component';
import { ExistingHotelAddContractComponent } from './existing-hotel-add-contract/existing-hotel-add-contract.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'allcontracts',
    component: ContractComponent
  },
  {
    path: 'addcontract',
    component: AddContractFormComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'exsistingHotelAddContract',
    component: ExistingHotelAddContractComponent
  },
  {
    path: 'homescreen',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
