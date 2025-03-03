import { Component, OnInit } from '@angular/core';
import { fail } from 'assert';

@Component({
  selector: 'app-popupshome',
  standalone: false,
  templateUrl: './popupshome.component.html',
  styleUrl: './popupshome.component.css'
})
export class PopupshomeComponent implements OnInit{
  modalOpen=false;
  constructor(){

  }
   ngOnInit(): void { }
    
   
   onClick(){
        this.modalOpen = !this.modalOpen;
     }
    
   
   
  }

