import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Burger } from '../../core/data/burgers';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-burger-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './burger-card.html',
  styleUrls: ['./burger-card.css']
})
export class BurgerCardComponent {
  @Input() burger!: Burger;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.burger);
    alert(`${this.burger.name} added to cart`);
  }
}