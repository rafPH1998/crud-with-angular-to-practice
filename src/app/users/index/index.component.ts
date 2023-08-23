import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Product } from 'src/app/Product';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  allProducts: Array<Product> | any = [];
  isLoading: boolean = false
  search!: FormGroup;

  constructor(
    private productService: ProductService,
    private messageService: MessagesService,
  ) {}

  ngOnInit() {
    this.getProducts()
    this.search = new FormGroup({
      name: new FormControl('')
    })
  }

 async getProducts() {
    await this.productService.getProducts().subscribe((items) => {
      setTimeout(() => {
        this.isLoading = true;
      }, 500)

      if (items.data) {
        const data = items.data;
        this.formatDateToBr(data)
        this.allProducts = data;
      }
    }, () => {
      this.isLoading = false;
    })
  }

  async deleteProduct(product: Product) {
    await this.productService.removeProduct(product.id).subscribe(() => {
      this.allProducts.splice(this.allProducts.indexOf(product), 1)
      this.messageService.Sucess('Produto adicionado com sucesso!');
    }, () => {
      this.isLoading = false;
    });
  }

  async searchProductByName() {
    await this.productService.getProductsByName(this.search.value.name).subscribe((items) => {
      const res = items.data
      if (res) {
        this.formatDateToBr(res);
        this.allProducts = res
      }
    })
  }

  formatDateToBr(data: Array<Product>) {
    data.forEach((item) => {
      if (item.createdAt) {
        item.createdAt = new Date(item.createdAt).toLocaleDateString('pt-BR');
      }
    });
  }

}
