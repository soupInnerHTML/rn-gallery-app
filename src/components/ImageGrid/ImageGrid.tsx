import React, {useMemo} from 'react';
import {ActivityIndicator, Platform, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useImageStore} from '../../hooks/useStore';
import {DEFAULT_INDENT, IMAGE_HEIGHT} from '../../constants/styles';
import debounce from 'lodash.debounce';
import {
  imageGridKeyExtractor,
  imageGridRenderItem,
} from './ImageGrid.flashList';
import {FlashList} from '@shopify/flash-list';

export const ImageGrid = observer(() => {
  const imageStore = useImageStore();
  const {images, loading} = imageStore;

  const isNotEmpty = images.length;
  const ListFooterComponent = useMemo(() => {
    if (isNotEmpty && loading && Platform.OS === 'ios') {
      return (
        <ActivityIndicator style={styles.iosLoadingIndicator} size="large" />
      );
    }
    return null;
  }, [isNotEmpty, loading]);

  return (
    <FlashList
      estimatedItemSize={IMAGE_HEIGHT}
      showsVerticalScrollIndicator={false}
      data={imageStore.images}
      numColumns={2}
      onEndReached={debounce(imageStore.fetchImages.bind(imageStore), 200)}
      onEndReachedThreshold={0.5}
      onRefresh={imageStore.refreshImages}
      refreshing={loading}
      renderItem={imageGridRenderItem}
      keyExtractor={imageGridKeyExtractor}
      {...{ListFooterComponent}}
    />
  );
});

const styles = StyleSheet.create({
  iosLoadingIndicator: {marginVertical: DEFAULT_INDENT},
});
