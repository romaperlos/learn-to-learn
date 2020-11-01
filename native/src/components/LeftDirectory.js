/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { THEME } from '../theme';

export const LeftDirectory = ({ leftDirectory, onShowThemes, company }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onShowThemes(leftDirectory)}>
      <View style={styles.container}>
        {leftDirectory.parent && <Feather name="chevron-down" size={18} color="black" />}
        <Text style={{
          fontFamily: 'poppins-regular',
          fontSize: 15,
          textAlign: 'center',
          fontWeight: 'bold',
          backgroundColor: THEME.MAIN_FONT_COLOR,
          paddingVertical: 4,
          marginVertical: 1,
          width: '100%',
          borderWidth: 2,
          borderColor: company.mainColor,
          color: company.mainColor,
          borderRadius: 5,
        }}
        >
          {leftDirectory.title}
        </Text>
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
});
