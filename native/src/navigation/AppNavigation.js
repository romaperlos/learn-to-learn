/* eslint-disable import/prefer-default-export */
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from '../screens/MainScreen';
import { LearningScreen } from '../screens/LearningScreen';
import { DirectoryScreen } from '../screens/DirectoryScreen';
import { THEME } from '../theme';

// создаём параметры навигации по существующим экранам
const LearnNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Learning: {
      screen: LearningScreen,
    },
    Directory: {
      screen: DirectoryScreen,
    },
  },
  {
    initialRouteName: 'Main',
    // общие / дефолтные свойства для навигации
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
      },
      headerTintColor: THEME.MAIN_FONT_COLOR,
    },
  },
);

// оборачиваем наш навигатор в контейнер, чтобы экспортировать его в App.js
export const AppNavigation = createAppContainer(LearnNavigator);
// export const AppNavigation = <NavigationContainer><LearnNavigator.Navigator>{}</LearnNavigator.Navigator></NavigationContainer>;
