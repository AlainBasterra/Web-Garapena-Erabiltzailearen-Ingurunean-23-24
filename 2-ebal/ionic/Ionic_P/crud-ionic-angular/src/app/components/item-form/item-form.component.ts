import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  newItem = '';
  editingIndex = null;

  constructor(private crudService: CrudService) {}

  ngOnInit() {}

  addItem() {
    this.crudService.addItem(this.newItem);
    this.newItem = '';
  }

  updateItem() {
    this.crudService.updateItem(this.editingIndex, this.newItem);
    this.newItem = '';
    this.editingIndex = null;
  }

  editItem(index) {
    this.newItem = this.crudService.getAllItems()[index];
    this.editingIndex = index;
  }

  deleteItem(index) {
    this.crudService.deleteItem(index);
  }
}
