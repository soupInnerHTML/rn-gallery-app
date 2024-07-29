import {StoreContext, stores} from '../constants/storeContext';
import {useContext} from 'react';
import {imageStore} from '../store/ImageStore';

export const useStores = () => {
  return useContext(StoreContext);
};
export function useStore<T>(storeKey: keyof typeof stores) {
  const storesCtx = useStores();
  return storesCtx[storeKey] as T;
}

export const useImageStore = () => useStore<typeof imageStore>('imageStore');
