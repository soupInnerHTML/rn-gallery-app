import React, {FC, memo} from 'react';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import {ROUTE} from '../constants/route';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {Skeleton} from './Skeleton';
import Animated from 'react-native-reanimated';
import {useSmoothImage} from '../hooks/useSmoothImage';
import {IImage} from '../types/image';

interface ImageOptimizedProps {
  image: IImage;
}

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

export const ImageOptimized: FC<ImageOptimizedProps> = memo(
  ({image}) => {
    const imageWidth = useWindowDimensions().width / 2;
    const navigation = useNavigation();
    const ratio = image.height / image.width;
    const imageHeight = ratio * imageWidth;
    const {loading, ...smoothImage} = useSmoothImage();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTE.IMAGE_VIEW, {image})}>
        {loading && <Skeleton height={imageHeight} width={imageWidth} />}
        <AnimatedFastImage
          {...smoothImage}
          style={[smoothImage.style, {height: imageHeight, width: imageWidth}]}
          source={{
            uri: image.urls.thumb,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => prevProps.image.id === nextProps.image.id,
);
