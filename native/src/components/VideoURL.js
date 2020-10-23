/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  StyleSheet, Text, View, TouchableOpacity, Linking,
} from 'react-native';

export const VideoURL = ({ videoURL }) => {
  return (
      <TouchableOpacity activeOpacity={0.5} onPress={() =>Linking.openURL(videoURL)}>
        <View style={styles.container}>
          <Text style={styles.text}><Feather name="play" size={24} color="black" /> Посмотреть видео</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
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
