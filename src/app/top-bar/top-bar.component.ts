import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  productsCount: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    console.log('this.cartService.items', this.cartService.items);
    this.productsCount = this.cartService.items.length;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/