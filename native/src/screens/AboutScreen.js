import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export function AboutScreen({}) {
  return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
    </View>
  );
}

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'About App',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="profile"
        iconName="user"
        onPress={() => console.log('was pressed user button')}
      />
      <Item
          title="logout"
          iconName="log-out"
          onPress={() => console.log('was pressed user button')}
        />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="drawer"
        iconName="menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
