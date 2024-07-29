import {ListRenderItem} from '@shopify/flash-list';
import {IImage} from '../../types/image';
import {ImageOptimized} from '../ImageOptimized';
import React from 'react';

export const imageGridRenderItem: ListRenderItem<IImage> = ({item}) => (
  <ImageOptimized {...{image: item}} />
);
export const imageGridKeyExtractor = (item: IImage) => item.id;
