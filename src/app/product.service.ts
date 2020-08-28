import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
	productsList = [{productName : "Avon Passion",
					 productDescription : "Star fruit, Jasmine and vanilla bourbon and creamy musk",
					 unitPrice : 350,
					 productId : 1,
					 image : "avonpassion.jpg"
					 },

					 {productName : "Blue Escape for Her",
					 productDescription : "Blue lotus, pear nectar, tropical driftwood and sultry musk",
					 unitPrice : 370,
					 productId : 2,
					 image : "blueescapeforher.jpg"},

					 {productName : "Rare Diamonds",
					 productDescription : "Plum blossom, diamond orchid and rich, cashmare and woods",
					 unitPrice : 400,
					 productId : 3,
					 image : "rarediamonds.jpg"},

					 {productName : "Outspoken by Fergie",
					 productDescription : "Fruit floral",
					 unitPrice : 250,
					 productId : 4,
					 image : "outspokenbyfeegie.jpg"},

					 {productName : "Rare Amethyst",
					 productDescription : "Plum, violet and sandalwood",
					 unitPrice : 300,
					 productId : 5,
					 image : "rareamethyst.jpg"},

					 {productName : "Haiku Eau",
					 productDescription : "Floral, jesmine, lillies and cetrus",
					 unitPrice : 250,
					 productId : 6,
					 image : "haikueau.jpg"},

					 {productName : "Rare Gold",
					 productDescription : "Orange flowers, bergamot, woods, amber and vanilla",
					 unitPrice : 350,
					 productId : 7,
					 image : "raregold.jpg"},

					 {productName : "Secret to Keep",
					 productDescription : "Apple, strawberry, jesmine, white musk and sandalwood",
					 unitPrice : 300,
					 productId : 8,
					 image : "secrettokeep.jpg"},

					 {productName : "Rare Pearls",
					 productDescription : "Floral with magnolla and plum",
					 unitPrice : 280,
					 productId : 9,
					 image : "rarepearls.jpg"}] 
	constructor() { }

	getProducts(){return this.productsList;}
}
