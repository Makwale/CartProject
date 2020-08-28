import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	itemsList = []
	totalItems = 0;
	totalPrice = 0.00;
  	constructor(private cartService : CartService) { }

	ngOnInit(): void {
		this.updateItemList();
		this.totalItems = this.cartService.getTotalItems();
		this.totalPrice = this.cartService.getTotalPrice();
	}

	deleteItem(itemNumber, unitPrice){
		this.cartService.deleteItem(itemNumber - 1, unitPrice);
		this.updateItemList();
	}

	updateItemList(){
		this.itemsList = this.cartService.getItemList();
		this.totalItems = this.cartService.getTotalItems();
		this.totalPrice = this.cartService.getTotalPrice();
	}

}
