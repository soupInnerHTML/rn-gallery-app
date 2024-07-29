import {createContext} from 'react';
import {imageStore} from '../store/ImageStore';

export const stores = {
  imageStore,
};
export const StoreContext = createContext(stores);
