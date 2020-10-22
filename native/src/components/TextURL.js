/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Linking,
} from 'react-native';

export const TextURL = ({ textURL }) => {
  return (
      <TouchableOpacity activeOpacity={0.5} onPress={() =>Linking.openURL(textURL)}>
        <View style={styles.container}>
          <Text style={styles.text}>Ссылка на текстовый-контент</Text>
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
