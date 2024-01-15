import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  items = [];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.items = this.crudService.getAllItems();
  }
}
