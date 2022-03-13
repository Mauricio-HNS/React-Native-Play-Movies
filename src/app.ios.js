/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {registerScreens} from './screens';
import {iconsLoaded, iconsMap} from './utils/AppIcons';
import configureStore from './store/configureStore';

const store = configureStore();
registerScreens(store, Provider);

const navigatorStyle = {
  navBarTranslucent: true,
  drawUnderNavBar: true,
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: true,
};

class App extends Component {
  constructor(props) {
    super(props);
    iconsLoaded.then(() => {
      this.startApp();
    });
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Movies',
          screen: 'play_movies.Movies',
          icon: iconsMap['ios-film-outline'],
          selectedIcon: iconsMap['ios-film'],
          title: 'Movies',
          navigatorStyle,
          navigatorButtons: {
            rightButtons: [
              {
                title: 'Search',
                id: 'search',
                icon: iconsMap['ios-search'],
              },
            ]
          },
        },
        {
          'TV Shows': true,
          screen: 'play_movies.Movies',
          icon: iconsMap['ios-desktop-outline'],
          selectedIcon: iconsMap['ios-desktop'],
          title: 'Movies',
          navigatorStyle,
        },
      ],
	  //Continuar daqui!!!!
        {
          'white': true,
          tabBarSelectedButtonColor: 'white',
          tabBarBackgroundColor: 'black'
        },
    });
  }

}
 export default App;


