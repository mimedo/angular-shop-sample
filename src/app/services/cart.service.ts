import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class CartService {

  items = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCard(product) {
    const indexOfProductToBeRemoved = this.items.findIndex(i => i.name === product.name);
    this.items.splice(indexOfProductToBeRemoved, 1);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get("/assets/shipping.json");
  }
}
