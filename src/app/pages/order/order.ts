import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FormsModule],
  templateUrl: './order.html',
  styleUrls: ['./order.css']
})
export class OrderComponent {
  customer = {
    name: '',
    phone: '',
    address: ''
  };

  constructor(public cartService: CartService) {}

  placeOrder() {
    if (!this.customer.name || !this.customer.phone || !this.customer.address) {
      alert('Please fill all checkout fields');
      return;
    }

    if (this.cartService.cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    alert(`Thank you ${this.customer.name}, your order has been placed!`);
    this.cartService.clearCart();

    this.customer = {
      name: '',
      phone: '',
      address: ''
    };
  }
}