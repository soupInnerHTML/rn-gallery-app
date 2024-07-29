/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

enableScreens();
AppRegistry.registerComponent(appName, () => App);
