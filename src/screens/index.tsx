import React, {FC} from 'react';
import {ROUTE} from '../constants/route';
import {HomeScreen} from './HomeScreen';
import {ImageViewScreen} from './ImageViewScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';
import {observer} from 'mobx-react-lite';
import {CustomBackButton} from '../components/CustomBackButton';
import {useToastError} from '../hooks/useToastError';

const Stack = createStackNavigator<RootStackParamList>();

export const Screens: FC = observer(() => {
  useToastError();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTE.HOME}
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerTransparent: true,
          headerLeft: props => props.canGoBack && <CustomBackButton />,
        }}>
        <Stack.Screen
          name={ROUTE.HOME}
          component={HomeScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name={ROUTE.IMAGE_VIEW}
          component={ImageViewScreen}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
