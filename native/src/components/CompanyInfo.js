/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { THEME } from '../theme';

export const CompanyInfo = ({ company }) => {
  
  console.log(company)

  return (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: company.logoUrl }} />
    </View>
    <Text style={styles.title}>{ company.companyName }</Text>
    <Text style={styles.description}>{ company.description }</Text>
  </View>
);
  }

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },

  imageContainer: {
    width: '100%',
    height: 350,
    flex: 1,
  },

  image: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
    borderRadius: 10,
    flex: 1,
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
