import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  showInputs: boolean = false;
  showFrame5019: boolean = true;
  @Output() closed = new EventEmitter<void>();
 
  toggleInputField() {
    this.showInputs = !this.showInputs;
    this.showFrame5019=!this.showFrame5019;
  }
  closeDialog() {
    this.closed.emit();
  }
}
