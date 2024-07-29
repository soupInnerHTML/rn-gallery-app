import React, {FC} from 'react';
import ReanimatedSkeleton from 'react-native-reanimated-skeleton';
import {commonStyles} from '../constants/styles';
import {StyleSheet} from 'react-native';

interface SkeletonProps {
  width: number;
  height: number;
}

export const Skeleton: FC<SkeletonProps> = ({height, width}) => {
  return (
    <ReanimatedSkeleton
      animationDirection={'horizontalRight'}
      containerStyle={[commonStyles.full, styles.skeleton]}
      boneColor={'#E0E0E0'}
      highlightColor={'#C0C0C0'}
      layout={[{key: 1, width, height}]}
      isLoading={true}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    position: 'absolute',
  },
});
