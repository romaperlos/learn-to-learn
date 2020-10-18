import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RegisterScreen({}) {
  return (
    <View style={styles.center}>
      <Text>RegisterScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
