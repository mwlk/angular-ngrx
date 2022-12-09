import { ItemsState } from '../../core/models/items.state';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/items.actions';

// export interface ItemState {


export const itemsInitialState: ItemsState = {
  loading: false,
  loaded: false,
  items: [],
  error: null,
};

const _itemsReducer = createReducer(
  itemsInitialState,
  on(actions.loadItems, (state) => ({ ...state, loading: true })),

  on(actions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    loading: false,
    loaded: true,
    items: [...items],
  })),

  on(actions.loadItemsError, (state, { payload }) => ({
    ...state,
    loaded: false,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function itemsReducer(state: ItemsState | undefined, action: Action) {
  return _itemsReducer(state, action);
}
