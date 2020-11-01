/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

export const Description = ({ description }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{description}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 5,
  },
  text: {
    fontFamily: 'poppins-regular',
    fontSize: 14,
    width: '95%',
    color: '#000',
  },
});
