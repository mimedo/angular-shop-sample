import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items;
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    // Populate items property with products (items) in array gathered from cartService
    this.items = this.cartService.getItems();
    this.reactiveForm();
   }

   reactiveForm() {
    this.checkoutForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
   }

  errorHandling = (control: string, error: string) => {
    return this.checkoutForm.controls[control].hasError(error);
  }

  removeFromCard(product) {
    this.cartService.removeFromCard(product);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  onSubmit() {
    this.clearCart();
  }

}