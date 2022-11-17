import { loadItems } from './../../../../state/actions/items.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  constructor(private _store: Store<any>) {}

  ngOnInit(): void {
    this._store.dispatch(loadItems());
  }
}
