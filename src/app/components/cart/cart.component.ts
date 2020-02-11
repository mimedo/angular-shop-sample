import { Component } from "@angular/core";
import { CartService } from "@services/cart.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
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
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  getErrorMessage(control, fieldName) {
    let error = null;
    if (control.errors) {
      const firstKey = Object.keys(control.errors)[0];
      switch (firstKey) {
        case "required":
          error = { error: "Enter " + fieldName };
          break;
        case "email":
          error = { error: "Enter valid " + fieldName};
          break;
      }
    }
    return error;
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
