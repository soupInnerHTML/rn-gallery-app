import React from 'react';
import {StoreContext, stores} from './constants/storeContext';
import {observer} from 'mobx-react-lite';
import {Screens} from './screens';
import Toast from 'react-native-toast-message';
import {Platform, StatusBar, useColorScheme} from 'react-native';

// Я специально не стал использовать SafeAreView, потому что мне такой UI больше нравится

const App = observer(() => {
  const theme = useColorScheme();
  const barStyle =
    theme === 'dark' && Platform.OS === 'ios'
      ? 'light-content'
      : 'dark-content';
  return (
    <StoreContext.Provider value={stores}>
      <Screens />
      <StatusBar {...{barStyle}} />
      <Toast position={'bottom'} />
    </StoreContext.Provider>
  );
});

export default App;
