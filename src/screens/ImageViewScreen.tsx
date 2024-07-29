import React, {FC, useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ImageViewScreenProps} from '../types/navigation';
import HeartFilled from '../assets/icons/heartFilled.svg';
import HeartOutline from '../assets/icons/heartOutline.svg';
import {useImageStore} from '../hooks/useStore';
import {observer} from 'mobx-react-lite';
import dayjs from 'dayjs';
import {ZoomableImage} from '../components/ZoomableImage';
import {commonStyles, DEFAULT_INDENT} from '../constants/styles';
import FastImage from 'react-native-fast-image';

export const ImageViewScreen: FC<ImageViewScreenProps> = observer(({route}) => {
  const {image} = route.params;
  const imageStore = useImageStore();
  const date = useMemo(
    () => dayjs(image.created_at).fromNow(),
    [image.created_at],
  );
  const LikeIcon = useMemo(
    () => (image.liked_by_user ? HeartFilled : HeartOutline),
    [image.liked_by_user],
  );
  return (
    <View style={commonStyles.full}>
      <ZoomableImage uri={image.urls.full} />
      <View style={styles.contact}>
        <FastImage
          source={{uri: image.user.profile_image.small}}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.text}>{image.user.name}</Text>
          <Text style={styles.text}>{date}</Text>
        </View>

        <TouchableOpacity
          onPress={() => imageStore.likePhoto(image.id)}
          style={styles.likeContainer}>
          <LikeIcon width={24} height={24} />
          <Text style={styles.text}>{image.likes ? image.likes : ''}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: DEFAULT_INDENT,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 3,
  },
});
