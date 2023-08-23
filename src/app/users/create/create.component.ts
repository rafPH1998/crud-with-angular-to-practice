import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  userForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
    private messageService: MessagesService,
    private router: Router,
  ) {}

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


  async submit() {
    if (this.userForm.invalid || this.isLoading) {
      return;
    }

    this.isLoading = true;

    const formData = this.userForm.value;
    await this.productService.createProduct(formData).subscribe(() => {
      this.isLoading = false;
      this.messageService.Sucess('Produto adicionado com sucesso!');
      this.router.navigate(['/']);
    }, () => {
      this.isLoading = false;
    });
  }
}



