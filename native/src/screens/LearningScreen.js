/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function LearningScreen({}) {
  return (
    <View style={styles.center}>
      <Text>LearningScreen</Text>
    </View>
  );
}

LearningScreen.navigationOptions = {
  headerTitle: 'My course',
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
