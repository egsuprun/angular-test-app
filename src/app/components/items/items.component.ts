import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../interfaces/item.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  addedItemSubject: Subject<Item> = new Subject<Item>();

  constructor(private itemService: ItemService) {}
  data: Item[] = [];

  ngOnInit(): void {}

  emitEventToChild(item: Item) {
    this.addedItemSubject.next(item);
  }

  onAdd(element: Item) {
    this.itemService
      .addItem(element)
      .subscribe((item) => this.emitEventToChild(item));
  }
}
