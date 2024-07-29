import {useImageStore} from './useStore';
import {useEffect} from 'react';
import Toast from 'react-native-toast-message';

export function useToastError() {
  const store = useImageStore();
  useEffect(() => {
    if (store.error) {
      Toast.show({
        type: 'error',
        text1: store.error,
        onHide: () => {
          store.setError('');
        },
      });
    }
  }, [store.error]);
}
