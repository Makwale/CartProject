import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	productsList = [];
	totalItems = 0;
	searchInput = new FormControl('');
	constructor(private productService : ProductService,
	 private cartService : CartService, private router : Router) { }

	ngOnInit(): void {
		this.productsList = this.productService.getProducts();
		this.updateTotalItems()
	}

	addToCart(product){
		if(!this.cartService.equal(product)){
			this.cartService.addItemToList(product);
			this.updateTotalItems();
		}else{
			window.alert("The item exists in the cart");
		}
	}

	goToCart(){
		this.router.navigateByUrl('cart');
	}

	updateTotalItems(){
		this.totalItems = this.cartService.getTotalItems();
	}


	searchProduct(){
		this.productsList = this.productsList.filter(
			product => product.productName.startsWith(this.searchInput.value));
	}



}
