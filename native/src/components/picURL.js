/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, View, Image,
} from 'react-native';

export const PicURL = ({ picUrl }) => {
  console.log(picUrl);
  return (
      <View style={styles.container}>
        <Image source={{ uri: picUrl }} style={styles.image} />
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    flex: 1,
  },
});
