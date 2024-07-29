import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useState} from 'react';

export const useSmoothImage = () => {
  const [loading, setLoading] = useState(true);
  const opacity = useSharedValue(0);

  const animatedImageStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return {
    loading,
    style: animatedImageStyle,
    onLoad: () => {
      setLoading(false);
      opacity.value = withTiming(1, {duration: 1000});
    },
  } as const;
};
