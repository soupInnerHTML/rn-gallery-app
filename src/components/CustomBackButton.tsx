import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Svg, {Path} from 'react-native-svg';
import {DEFAULT_INDENT} from '../constants/styles';

export const CustomBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          fill="#000000"
          d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DEFAULT_INDENT,
    padding: 6,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
});
