import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	itemsList = [];
	private totalItems = 0;
	private totalPrice = 0; 
	itemNumber = 0;

  	constructor() { }

  	getItemList(){ return this.itemsList;}

  	addItemToList(product){ 
	  	product.itemNumber = this.itemNumber + 1;
	  	this.itemsList.push(product);
	  	this.setTotalPrice(product['unitPrice'])
	  	this.itemNumber = this.itemNumber + 1;
  	}

  	getTotalItems(){ return this.itemsList.length;}

  	setTotalPrice(unitPrice) { this.totalPrice = this.totalPrice + unitPrice;}

  	getTotalPrice(){ return this.totalPrice;}

  	deleteItem(itemNumber, unitPrice){
  		this.itemsList.splice(itemNumber,1);
  		this.itemNumber = this.itemNumber - 1;
  		this.totalPrice = this.totalPrice - unitPrice;
  		for (let i = 0; i < this.itemNumber; i++) {
  			this.itemsList[i].itemNumber = i + 1;
  		}
  		
  	}

  	equal(item){
  		for(let product of this.itemsList){
  			if(product.productId == item.productId){
  				return true;
  			}
  		}
  		return false;
  	}
}
