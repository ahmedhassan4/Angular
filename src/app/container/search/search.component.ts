import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText:string = ""

  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('searchInput') 
  searchInputEl:ElementRef
  // onSearchTextChange(){
  //   this.searchTextChange.emit(this.searchText)
  // }

  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value
    this.searchTextChange.emit(this.searchText)
  }
}
