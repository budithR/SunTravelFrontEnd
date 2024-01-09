


import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Contract } from '../contract/contract';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public onAddContract(addFrom: NgForm): void {
    
  }
  
  public onOpenModal(contracts: Contract, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add'){
      button.setAttribute('data-target', '#addContractModal');
    }
    container?.appendChild(button);
    button.click();
  }
  
  public onOpenModalAddContract(mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add'){
      button.setAttribute('data-target', 'addContractModal');
    }
    container?.appendChild(button);
    button.click();
  }

}


