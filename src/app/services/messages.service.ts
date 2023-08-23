import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = ''

  constructor() { }

  Sucess(message: string) {
    this.message = message
    setTimeout(() => {
      this.message = ''
    }, 3000)
  }
}
