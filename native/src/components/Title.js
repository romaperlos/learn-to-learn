/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

export const Title = ({ title }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  text: {
    fontFamily: 'poppins-regular',
    fontSize: 30,
    textAlign: 'center',
    // fontWeight: 'bold',
    width: '100%',
    color: '#000',
  },
});
