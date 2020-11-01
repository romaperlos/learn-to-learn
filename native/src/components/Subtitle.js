/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

export const Subtitle = ({ subtitle }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{subtitle}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  },
  text: {
    fontFamily: 'open-regular',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    color: '#000',
  },
});
