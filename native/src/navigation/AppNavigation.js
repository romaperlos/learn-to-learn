/* eslint-disable import/prefer-default-export */
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { MainScreen } from '../screens/MainScreen';
import { LearningScreen } from '../screens/LearningScreen';
import { DirectoryScreen } from '../screens/DirectoryScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { FeedbackScreen } from '../screens/FeedbackScreen';
import { THEME } from '../theme';

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: THEME.MAIN_COLOR,
    },
    headerTintColor: THEME.MAIN_FONT_COLOR,
  },
};

// создаём параметры навигации по существующим экранам
const LearnNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Learning: LearningScreen,
    Directory: DirectoryScreen,
  },
  navigatorOptions,
);

// const AboutNavigator = createStackNavigator({
//   About: AboutScreen,
// },
// navigatorOptions);

// const FeedbackNavigator = createStackNavigator({
//   Feedback: FeedbackScreen,
// },
// navigatorOptions);

// export const LeftNavigator = createDrawerNavigator({
//   Main: {
//     screen: LearnNavigator,
//     navigationOptions: {
//       drawerLabel: 'Home',
//     },
//   },
//   About: {
//     screen: AboutNavigator,
//     navigationOptions: {
//       drawerLabel: 'About App',
//     },
//   },
//   Feedback: {
//     screen: FeedbackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Send feedback',
//     },
//   },
// },
// {
//   contentOptions: {
//     activeTintColor: THEME.MAIN_COLOR,
//     labelStyle: {
//       fontFamily: 'open-bold',
//     },
//   },
// });

// оборачиваем наш навигатор в контейнер, чтобы экспортировать его в App.js
export const AppNavigation = createAppContainer(LearnNavigator);
