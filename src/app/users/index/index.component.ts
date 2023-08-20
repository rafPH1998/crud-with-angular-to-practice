import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  allProducts: Array<Product> = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((items) => {
      if (items.data) {
        const data = items.data;

        data.forEach((item) => {
          if (item.createdAt) {
            item.createdAt = new Date(item.createdAt).toLocaleDateString('pt-BR');
          }
        });

        this.allProducts = data;
      }
    });
  }
}
