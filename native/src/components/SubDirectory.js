/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { THEME } from '../theme';

export const SubDirectory = ({ subDirectory, onChooseSubDirectory, company }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={() => onChooseSubDirectory(subDirectory)}>
    <View style={styles.container}>
      <Text style={{
        fontFamily: 'poppins-regular',
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: company.mainColor,
        paddingVertical: 10,
        marginVertical: 1,
        width: '100%',
        borderWidth: 1,
        color: THEME.MAIN_FONT_COLOR,
        borderRadius: 5,
      }}
      >
        {subDirectory.title}
      </Text>
      <View style={styles.iconContainer}>
        {subDirectory.lastDir && <Feather name="corner-down-right" size={30} color="black" />}
      </View>
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
  iconContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
});
