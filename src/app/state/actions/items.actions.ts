import { ItemModel } from './../../core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction(
  '[Item List] Load Items' //TODO
);

export const loadItemsSuccess = createAction(
  '[Item List] Loaded Success',
  props<{ items: ItemModel[] }>()
);

export const loadItemsError = createAction(
  '[Item List] Loaded Error',
  props<{ payload: any }>()
);
