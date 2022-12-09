import { ItemModel } from './../../../../core/models/Item.interface';
import { ShowCaseService } from './../../services/show-case.service';
import { selectitemsLoading } from './../../../../state/selectors/itesm.selectors';
import { Observable } from 'rxjs';
import {
  loadItems,
  loadItemsSuccess,
} from './../../../../state/actions/items.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  error$: Observable<any> = new Observable();

  constructor(
    private _store: Store<any>,
    private _showCaseSvc: ShowCaseService
  ) {}

  ngOnInit(): void {
    this.loading$ = this._store.select(selectitemsLoading);

    this._store.dispatch(loadItems());

    this._showCaseSvc.getDataApi().subscribe((res: ItemModel[]) => {
      this._store.dispatch(loadItemsSuccess({ items: res }));
    });
  }
}
