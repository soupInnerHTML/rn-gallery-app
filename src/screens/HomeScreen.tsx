import React, {FC} from 'react';
import {View} from 'react-native';
import {ImageGrid} from '../components/ImageGrid/ImageGrid';
import {HomeScreenProps} from '../types/navigation';
import {commonStyles} from '../constants/styles';

export const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <View style={commonStyles.full}>
      <ImageGrid />
    </View>
  );
};
