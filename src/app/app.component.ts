import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddToCartComponent, ShoppingCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tool-shop';
}
