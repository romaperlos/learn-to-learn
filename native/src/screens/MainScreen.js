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
      <View style={styles.container}>
        <Text onPress={goToMyCourse} style={styles.title}>START EDUCATION</Text>
      </View>
    </ScrollView>
  );
}

// свойства для конкретного экрана
MainScreen.navigationOptions = {
  headerTitle: 'Learn-to-Learn',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="login"
        iconName="log-in"
        onPress={() => console.log('was pressed login button')}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="profile"
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
  title: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: THEME.MAIN_COLOR,
    paddingVertical: 20,
    marginVertical: 1,
    width: '100%',
    borderWidth: 1,
    color: THEME.MAIN_FONT_COLOR,
    borderRadius: 10,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
