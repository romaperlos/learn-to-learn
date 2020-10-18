/* eslint-disable import/prefer-default-export */
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from '../screens/MainScreen';
import { LearningScreen } from '../screens/LearningScreen';
import { THEME } from '../theme';

// создаём параметры навигации по существующим экранам
const LearnNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Learning: {
      screen: LearningScreen,
    },
  },
  {
    initialRouteName: 'Main',
    // общие свойства для навигации
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
      },
      headerTintColor: '#fff',
    },
  },
);

// оборачиваем наш навигатор в контейнер, чтобы экспортировать его в App.js
export const AppNavigation = createAppContainer(LearnNavigator);
// export const AppNavigation = <NavigationContainer><LearnNavigator.Navigator>{}</LearnNavigator.Navigator></NavigationContainer>;
