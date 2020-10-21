/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { THEME } from '../theme';

export const SubDirectory = ({ subDirectory, onChooseSubDirectory }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={() => onChooseSubDirectory(subDirectory)}>
    <View style={styles.container}>
      <Text style={styles.title}>{subDirectory.title}</Text>
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
    backgroundColor: THEME.MAIN_COLOR,
    paddingVertical: 10,
    marginVertical: 1,
    width: '90%',
    borderWidth: 1,
    color: THEME.MAIN_FONT_COLOR,
    borderRadius: 5,
  },
});
