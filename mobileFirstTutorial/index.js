/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Apps/App';
import App2 from './Apps/App2';
import App3 from './Apps/App3';

import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => App2);

// AppRegistry.registerComponent(appName, () => App3);
