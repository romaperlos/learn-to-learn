/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export function AboutScreen({}) {
  return (
    <View style={styles.center}>
      <Image
        // style={styles.tinyLogo}
        source={require('../ramaLogoPng.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Learn-to-Learn Application</Text>
      <Text>Created by R.A.M.A. team</Text>
      <Text>Version <Text style={styles.marker}>1.0.0</Text></Text>
    </View>
  );
}

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'About App',
  headerStyle: {
    backgroundColor: 'grey',
  },
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      {/* <Item
        title="profile"
        iconName="user"
        onPress={() => console.log('was pressed user button')}
      /> */}
      {/* <Item
        title="logout"
        iconName="log-out"
        onPress={() => console.log('was pressed user button')}
      /> */}
    </HeaderButtons>
  ),
  // headerLeft: (
  //   <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
  //     <Item
  //       title="drawer"
  //       iconName="menu"
  //       onPress={() => navigation.toggleDrawer()}
  //     />
  //   </HeaderButtons>
  // ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    width: 300,
    height: 100,
    marginBottom: 40,
  },
  text: {
    fontFamily: 'poppins-regular',
    fontWeight: 'bold',
    fontSize: 18,
  },
  marker: {
    fontWeight: 'bold',
  },
});
