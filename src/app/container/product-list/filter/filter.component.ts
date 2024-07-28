import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number= 0;
  @Input()
  inStock:number = 0;
  @Input()
  outOfStock:number= 0;

  @Output()
  selectedFilterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>
  selectedFilterRadioButton:string = 'all'

  onSelectedFilterRadioButtonChange(){
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton)
  }
}
