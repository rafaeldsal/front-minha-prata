import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    console.log('Buscando por: ', this.searchTerm)
    // Lógica para retornar todos os produtos
  }
}
