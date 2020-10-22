/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { THEME } from '../theme';

export const ContentTitle = ({ contentTitle, onShowContent }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onShowContent(contentTitle)}>
      <View style={styles.container}>
        <Text style={styles.title}>{contentTitle.title}</Text>
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

  title: {
    fontFamily: 'poppins-regular',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: THEME.MAIN_FONT_COLOR,
    paddingVertical: 4,
    marginVertical: 1,
    width: '100%',
    borderWidth: 2,
    borderColor: THEME.MAIN_COLOR,
    color: THEME.MAIN_COLOR,
    borderRadius: 5,
  },
});
