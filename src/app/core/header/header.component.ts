import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleCart = new EventEmitter<void>();

  onCartClick() {
    this.toggleCart.emit();
  }

  @Output() categorySelected = new EventEmitter<string>();
  selectedCategory: string = 'all';
  cartItemCount = 3; // chumbado. Trocar futuramente

  categories = [
    { label: 'Todos', value: 'all', icon: 'fa-solid fa-gem' },
    { label: 'Anéis', value: 'anel', icon: 'fa-solid fa-ring' },
    { label: 'Brincos', value: 'brinco', icon: 'fa-solid fa-ear-deaf' },
    { label: 'Colares', value: 'colar', icon: 'fa-solid fa-gem' },
    { label: 'Braceletes', value: 'bracelete', icon: 'fa-solid fa-link' }
  ];

  filterProducts(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
