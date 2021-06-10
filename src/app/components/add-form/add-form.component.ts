import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter();
  text: string = '';
  constructor() {}

  ngOnInit(): void {}

  onAddClick() {
    if (!this.text) {
      throw new Error('add item name');
    }

    const newItem: Item = {
      name: this.text,
      date: new Date(Date.now()).toJSON(),
    };

    this.onAddItem.emit(newItem);

    this.text = '';
  }
}
