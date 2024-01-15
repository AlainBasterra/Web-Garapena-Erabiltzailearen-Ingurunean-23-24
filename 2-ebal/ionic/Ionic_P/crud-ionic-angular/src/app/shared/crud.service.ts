import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  items = [];

  constructor() { }

  getAllItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  updateItem(index, newItem) {
    this.items[index] = newItem;
  }

  deleteItem(index) {
    this.items.splice(index, 1);
  }
}
