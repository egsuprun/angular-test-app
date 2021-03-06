import {Component, OnInit, Input} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../interfaces/item.interface';
import {Sort} from '@angular/material/sort';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css'],
})
export class ItemsTableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() event: Observable<Item> = new Observable();

  dataSource: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.dataSource = this.itemService.getItems();
    this.event.subscribe(() => {
      this.dataSource = [...this.itemService.getItems()];
    });
  }

  sortData(sort: Sort) {
    const data = [...this.dataSource];
    if (!sort.active || sort.direction === '') {
      this.dataSource = data;
      return;
    }

    this.dataSource = data.sort((a: Item, b: Item) => {
      const isAsc = sort.direction === 'asc';
      return this.compareDate(new Date(a.date), new Date(b.date), isAsc);
    });
  }

  compareDate(a: Date, b: Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  findMaxId(): number {
    const tmp = this.dataSource.sort((a: Item, b: Item) => a.id - b.id);
    return tmp[tmp.length - 1].id;
  }

  onCopy(element: Item) {
    const item: Item = {
      name: element.name,
      date: element.date,
      id: this.findMaxId() + 1
    };

    this.itemService.copyItem(item);
    this.dataSource = [...this.itemService.getItems()];
    console.log(this.dataSource);

  }

  onDelete(element: Item) {
    this.itemService.deleteItem(element);

    this.dataSource = this.dataSource.filter(
      (item) => item.id != element.id
    )

  }

  moveItem(element: Item, isTop: boolean) {
    const tempData: Item[] = [...this.dataSource];
    const idx: number = tempData.indexOf(element);
    if (idx == -1) {
      alert('cannot get index');
      return;
    }

    if (isTop) {
      tempData.unshift(...tempData.splice(idx, 1));
    } else {
      tempData.push(...tempData.splice(idx, 1));
    }

    this.dataSource = tempData;
  }

  formatDate(date: string): string {
    const dateObj = new Date(date);

    let day: string = dateObj.getDate().toString();
    day = day.length == 1 ? '0' + day : day;

    let month: string = (dateObj.getMonth() + 1).toString();
    month = month.length == 1 ? '0' + month : month;

    let hours: string = dateObj.getHours().toString();
    hours = hours.length == 1 ? '0' + hours : hours;

    let minutes: string = dateObj.getMinutes().toString();
    minutes = minutes.length == 1 ? '0' + minutes : minutes;

    return `${day}.${month}.${dateObj.getFullYear()} ${hours}:${minutes}`;
  }
}
