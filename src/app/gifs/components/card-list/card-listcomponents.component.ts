import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-listcomponents.component.html' ,
  styleUrl: './card-listcomponents.component.css'

})
export class CardListComponent {


  @Input()
  public gifs: Gif[] = [];
}
