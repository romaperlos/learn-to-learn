/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { THEME } from '../theme';

export const LeftDirectory = ({ leftDirectory, onShowThemes }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={() => onShowThemes(leftDirectory)}>
    <View style={styles.container}>
      <Text style={styles.title}>{leftDirectory.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  title: {
    fontFamily: 'poppins-regular',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: THEME.MAIN_FONT_COLOR,
    paddingVertical: 10,
    marginVertical: 1,
    width: '80%',
    borderWidth: 2,
    borderColor: THEME.MAIN_COLOR,
    color: THEME.MAIN_COLOR,
    borderRadius: 5,
  },
});
