import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContentScreen({}) {
  return (
    <View style={styles.center}>
      <Text>ContentScreen</Text>
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
