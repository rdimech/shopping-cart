import { Component } from '@angular/core';
import { Api } from './services/api.services';

interface Cart {
  id: string;
  product: string;
  price: string;
  quantity: string;
}

interface ApiData {
  results: Cart[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CartService {
  title = 'shopping-cart';
  list: object[];

  constructor(private api: Api) {}

  getAllItems = () => {
    this.api.getCart().subscribe((data: ApiData) => {
      console.log('Data from cart items.', data);
      this.list = data.results;
      console.log(this.list);
  }
    );
};
}
