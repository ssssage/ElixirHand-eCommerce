import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './forpaging.component.html',
  styleUrls: ['./forpaging.component.scss']
})
export class ForpagingComponent implements OnInit {
  @Input() totalCount: number;
  @Input() pageSize: number;
  @Input() pageNumber: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPagerChange(event: any) {
    this.pageChanged.emit(event.page);
  }

}
