import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string [] = [

  ]

private organiceHistory( tag: string ){
  tag = tag.toLocaleLowerCase();

  if (this._tagsHistory.includes(tag) ) {
    this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
  }

  this._tagsHistory.unshift( tag );

  this._tagsHistory = this.tagsHistory.splice(0,10);
}



  get tagsHistory() {
    return [...this._tagsHistory];
  }

  public searchTag( tag: string ): void {
    if (tag.length === 0) return;

    this.organiceHistory(tag);

    // this._tagsHistory.unshift( tag );
  }



}
