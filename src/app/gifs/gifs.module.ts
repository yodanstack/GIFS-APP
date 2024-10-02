import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxcomponent } from './components/search-box.components';
import { CardListComponent } from './components/card-list/card-listcomponents.component';






@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxcomponent,
    CardListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
