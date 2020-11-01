/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

export function AboutScreen({}) {
  return (
    <View style={styles.center}>
      <Image
        source={require('../ramaLogoPng.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Learn-to-Learn Application</Text>
      <Text>Created by R.A.M.A. team</Text>
      <Text>
        Version
        <Text style={styles.marker}>1.0.0</Text>
      </Text>
      <Image
        source={require('../logo2.png')}
        style={styles.imageLogo}
      />
    </View>
  );
}

AboutScreen.navigationOptions = ({}) => ({
  headerTitle: 'About App',
  headerStyle: {
    backgroundColor: 'grey',
  },
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
    marginBottom: 60,
  },
  imageLogo: {
    width: 50,
    height: 50,
    marginTop: 15,
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
