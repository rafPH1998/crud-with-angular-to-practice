import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  userForm!: FormGroup;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  get name() {
    return this.userForm.get('name')!
  }

  get weight() {
    return this.userForm.get('weight')!
  }

  get description() {
    return this.userForm.get('description')!
  }

  async submit () {
    if (this.userForm.invalid) {
      return;
    }

    const formData = this.userForm.value;

    await this.productService.createProduct(formData).subscribe()
  }
}



