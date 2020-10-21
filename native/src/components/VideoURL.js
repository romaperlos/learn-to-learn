/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Linking,
} from 'react-native';

export const VideoURL = ({ videoURL }) => {
  return (
      <TouchableOpacity activeOpacity={0.5} onPress={() =>Linking.openURL(videoURL)}>
        <View style={styles.container}>
          <Text style={styles.text}>Ссылка на видео-контент</Text>
        </View>
      </TouchableOpacity>
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
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
    color: 'blue',
  },
});
