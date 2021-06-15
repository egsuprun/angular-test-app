import {Injectable} from '@angular/core';
import {Item} from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Item[] = [
    {
      name: "example 1",
      date: "2021-06-10T18:01:43.685Z",
      id: 1
    },
    {
      name: "example 2",
      date: "2021-07-10T18:00:46.446Z",
      id: 2
    },
    {
      name: "example 3",
      date: "2020-06-10T18:00:56.693Z",
      id: 3
    },
    {
      name: "example 1",
      date: "2019-06-10T18:00:43.685Z",
      id: 4
    }
  ];

  constructor() {}

  getItems(): Item[] {
    return this.items
  }

  deleteItem(item: Item): void {
    const idx = this.items.indexOf(item, 0);
    this.items = this.items.slice(idx, 1)
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  copyItem(item: Item): void {
    this.addItem(item);
  }
}
