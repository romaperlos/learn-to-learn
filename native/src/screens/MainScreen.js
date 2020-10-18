/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  View, Text, StyleSheet, Button, ScrollView,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CompanyInfo } from '../components/CompanyInfo';
import { DATA } from '../data';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export function MainScreen({ navigation }) {
  const goToMyCourse = () => {
    navigation.navigate('Learning');
  };

  console.log(DATA);

  return (
    <ScrollView style={styles.wrapper}>
      <CompanyInfo company={DATA[0]} />
      <Button title="Start education" onPress={goToMyCourse} borderRadius={30} color={THEME.MAIN_COLOR} overflow={'hidden'} />
    </ScrollView>
  );
}

// свойства для конкретного экрана
MainScreen.navigationOptions = {
  headerTitle: '',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="login"
        iconName="log-in"
        onPress={() => console.log('was pressed login button')}
      />
      <Item
        title="login"
        iconName="log-out"
        onPress={() => console.log('was pressed logout button')}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="login"
        iconName="user"
        onPress={() => console.log('was pressed user button')}
      />
    </HeaderButtons>
  ),
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  button: {
    backgroundColor: THEME.MAIN_COLOR,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
