import { Component } from '@angular/core';
import { Contract } from './contract';
import { ContractService } from './contract.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent {
  public contracts: Contract[] = [];
  

  constructor(private contractService: ContractService){}

  ngOnInit() {
    this.getContracts();
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
}
