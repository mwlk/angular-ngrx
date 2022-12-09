import { ItemsState } from './../../core/models/items.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.items
);

export const selectitemsLoading = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loading
);

export const selectItemsLoaded = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loaded
);

export const selectItemsError = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.error
);
