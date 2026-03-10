import { Injectable } from '@angular/core';
import { Burger } from '../data/burgers';

export interface CartItem extends Burger {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  addToCart(burger: Burger): void {
    const existing = this.cartItems.find(item => item.id === burger.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...burger, quantity: 1 });
    }
  }

  increase(id: number): void {
    const item = this.cartItems.find(item => item.id === id);
    if (item) {
      item.quantity += 1;
    }
  }

  decrease(id: number): void {
    const item = this.cartItems.find(item => item.id === id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        this.remove(id);
      }
    }
  }

  remove(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  get totalItems(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}