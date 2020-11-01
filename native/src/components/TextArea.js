/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

export const TextArea = ({ textArea }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{textArea}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontFamily: 'open-regular',
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    color: '#000',
  },
});
