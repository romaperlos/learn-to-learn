/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';


export function DirectoryScreen({ navigation }) {
  console.log(navigation);
  const directoryTitle = navigation.getParam('directoryTitle');
  console.log(directoryTitle);
  return (
    <View style={styles.center}>
      <Text style={styles.text}>{directoryTitle}</Text>
    </View>
  );
}

DirectoryScreen.navigationOptions = ({ navigation }) => {
  const directoryTitle = navigation.getParam('directoryTitle');
  return {
    headerTitle: directoryTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="home"
          iconName="home"
          onPress={() => navigation.navigate('Main')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    color: 'red',
  },
});
