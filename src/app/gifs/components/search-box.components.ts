import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
     placeholder="buscar gifs..."
     (keyup.enter)="searchTag()"
     #txtTagInput
     >
  `
})

export class SearchBoxcomponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  constructor(private gifsService: GifsService) { }


  searchTag() {
    const NewTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(NewTag);

    this.tagInput.nativeElement.value = '';

  }
}
