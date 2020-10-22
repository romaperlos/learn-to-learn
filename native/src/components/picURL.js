/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, View, Image,
} from 'react-native';

export const PicURL = ({ picURL }) => {
  return (
      <View style={styles.container}>
        <Image source={{ uri: picURL }} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
