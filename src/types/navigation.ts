import {ROUTE} from '../constants/route';
import {StackScreenProps} from '@react-navigation/stack';
import {IImage} from './image';

export type RootStackParamList = {
  [ROUTE.HOME]: undefined;
  [ROUTE.IMAGE_VIEW]: {image: IImage};
};

type Props<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;
export type HomeScreenProps = Props<ROUTE.HOME>;
export type ImageViewScreenProps = Props<ROUTE.IMAGE_VIEW>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
