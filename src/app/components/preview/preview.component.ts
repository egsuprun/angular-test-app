import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  columns: string[] = ['name', 'date', 'moves'];
  editorText: string = 'Editor';
  editorLink: string = '/editor'

  constructor() {}

  ngOnInit(): void {}
}
