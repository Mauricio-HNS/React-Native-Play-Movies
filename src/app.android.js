import React from 'react'; // eslint-disable-line
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: 'black',
  statusBarTextColorScheme: 'light',
  navigationBarColor: 'black',
  navBarBackgroundColor: '#0a0a08',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'white',
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true,
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'play_movies.Movies',
    title: 'Movies',
    navigatorStyle,
    leftButtons: [
      {
        id: 'sideMenu',
      },
    ],
  },
  drawer: {
    left: {
      screen: 'play_movies.Drawer',
    },
  },
});
