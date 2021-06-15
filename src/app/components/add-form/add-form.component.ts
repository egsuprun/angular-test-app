import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Item} from '../../interfaces/item.interface';
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter();
  text: string = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  onAddClick() {
    if (!this.text) {
      throw new Error('add item name');
    }

    const data = this.itemService.getItems();
    data.sort((a, b) => a.id - b.id)

    const newItem: Item = {
      name: this.text,
      date: new Date(Date.now()).toJSON(),
      id: data[data.length - 1].id + 1
    };

    this.onAddItem.emit(newItem);

    this.text = '';
  }
}
