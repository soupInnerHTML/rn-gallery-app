import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useEffect, useState} from 'react';

export const useSmoothImage = () => {
  const [loading, setLoading] = useState(true);
  const opacity = useSharedValue(0);

  const animatedImageStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    if (loading) {
      opacity.value = 0;
    }
  }, [loading]);

  return {
    loading,
    style: animatedImageStyle,
    onLoad: () => {
      setLoading(false);
      opacity.value = withTiming(1, {duration: 1000});
    },
  } as const;
};
