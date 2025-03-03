import { Component, ElementRef, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  
  @Output () close = new EventEmitter();

  constructor( private el:ElementRef)  {}

            ngOnInit(): void {
              document.body.appendChild(this.el.nativeElement)
            }
            ngOnDestroy(): void {
              //document.body.appendChild(this.el.nativeElement)
            this.el.nativeElement.remove();
            }

            onCloseClick(){
              this.close.emit();
            }
}
