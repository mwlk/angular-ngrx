import { ItemModel } from './Item.interface';

export interface ItemsState {
  loading: boolean;
  loaded: boolean;
  items: ReadonlyArray<ItemModel>;
  error: any;
}
