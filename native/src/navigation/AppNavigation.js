/* eslint-disable import/prefer-default-export */
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from '../screens/MainScreen';
import { LearningScreen } from '../screens/LearningScreen';
import { DirectoryScreen } from '../screens/DirectoryScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ContentScreen } from '../screens/ContentScreen';

import { THEME } from '../theme';

// прописываем дефолтные параметры навигации, которые будут применяться ко всем экранам
// и ставим их в конце LearnNavigator
const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: THEME.MAIN_COLOR,
    },
    headerTintColor: THEME.MAIN_FONT_COLOR,
  },
}

// создаём параметры навигации по существующим экранам
const LearnNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Learning: LearningScreen,
    Directory: DirectoryScreen,
    Content: ContentScreen,
    About: AboutScreen,
  },
  navigatorOptions,
);

// оборачиваем наш навигатор в контейнер, чтобы экспортировать его в App.js
export const AppNavigation = createAppContainer(LearnNavigator);
