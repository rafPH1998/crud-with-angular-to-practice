import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  product?: Product
  isLoading: boolean = false
  btnText: string = ''

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");

    if (id !== null) {
        this.productService
            .getProduct(id)
            .subscribe((item) => (this.product = item.data));
    } else {
      this.router.navigate(['/']);
    }
}

}
