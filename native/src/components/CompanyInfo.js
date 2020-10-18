/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { THEME } from '../theme';

export const CompanyInfo = ({ company }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: company.logoUrl }} />
    <Text style={styles.title}>{ company.companyName }</Text>
    <Text style={styles.description}>{ company.description }</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 300,
    marginBottom: 40,
    borderRadius: 10,
  },

  title: {
    color: THEME.MAIN_COLOR,
    fontFamily: 'poppins-regular',
    fontSize: 40,
  },

  description: {
    color: THEME.MAIN_COLOR,
    fontFamily: 'open-regular',
  },
});
