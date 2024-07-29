import React, {FC} from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import {Skeleton} from './Skeleton';
import {useSmoothImage} from '../hooks/useSmoothImage';
import Animated from 'react-native-reanimated';
import {commonStyles} from '../constants/styles';

interface ZoomableImage {
  uri: string;
}

export const ZoomableImage: FC<ZoomableImage> = ({uri}) => {
  const {loading, style: smoothImageStyle, ...smoothImage} = useSmoothImage();
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {loading && <Skeleton height={height} width={width} />}
      <Animated.View style={[smoothImageStyle, commonStyles.full]}>
        <ImageZoom
          {...smoothImage}
          {...{uri}}
          minScale={0.5}
          maxScale={5}
          doubleTapScale={3}
          minPanPointers={1}
          isSingleTapEnabled
          isDoubleTapEnabled
          resizeMode="cover"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
