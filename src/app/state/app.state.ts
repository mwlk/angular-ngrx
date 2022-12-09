import { ActionReducerMap } from '@ngrx/store';
import { ItemsState } from './../core/models/items.state';
import { itemsReducer } from './reducers';

export interface AppState {
  items: ItemsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    items: itemsReducer
}