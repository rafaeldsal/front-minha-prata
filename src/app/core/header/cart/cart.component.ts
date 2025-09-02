import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string,
  category: string,
  price: number,
  quantity: number,
  image: string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() isOpen: boolean = false;

  // Mock de itens. Remover para o serviço futuramente
  items$ = new BehaviorSubject<CartItem[]>([
    { name: 'Anel Solitário', category: 'Anéis', price: 199, quantity: 1, image: 'https://via.placeholder.com/60' },
    { name: 'Pulseira Elegante', category: 'Braceletes', price: 249, quantity: 2, image: 'https://via.placeholder.com/60' },
    { name: 'Colar Minimal', category: 'Colares', price: 179, quantity: 1, image: 'https://via.placeholder.com/60' }
  ]);

  increment(item: CartItem) {
    item.quantity++;
    this.items$.next(this.items$.getValue());
  }

  decrement(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.items$.next(this.items$.getValue());
    }
  }

  close() {
    this.isOpen = false;
  }

}
