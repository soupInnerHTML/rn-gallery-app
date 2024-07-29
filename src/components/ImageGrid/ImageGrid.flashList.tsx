import {MasonryListRenderItem} from '@shopify/flash-list';
import {IImage} from '../../types/image';
import {LogBox} from 'react-native';
import {ImageOptimized} from '../ImageOptimized';
import React from 'react';

// Я игнорирую эти сообщения поскольку не использую estimatedItemSize в Masonry, тк у всех изображений разная высота
LogBox.ignoreLogs(['estimatedItemSize FlashList prop is not defined']);
console.warn = (...args) => {
  if (args[0].includes('estimatedItemSize FlashList prop is not defined')) {
    return;
  }
};

export const imageGridRenderItem: MasonryListRenderItem<IImage> = ({item}) => (
  <ImageOptimized {...{image: item}} />
);
export const imageGridKeyExtractor = (item: IImage) => item.id;
