import { selectListItems } from './../../../../state/selectors/itesm.selectors';
import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css'],
})
export class UiBlockItemComponent implements OnInit {
  items$: Observable<readonly ItemModel[]> = new Observable();

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.items$ = this._store.select(selectListItems)
  }
}
