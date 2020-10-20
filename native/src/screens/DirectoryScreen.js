/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { Directory } from '../components/Directory';


export function DirectoryScreen({ navigation }) {
  const directory = navigation.getParam('directory');
  const directories = useSelector((state) => state.directories);

  const subDirectories = directories.filter((el) => el.parent === directory._id);


  
  console.log(directory);
  return (
    <View>
      <FlatList
        data={subDirectories}
        keyExtractor={(subDirectory) => subDirectory._id.toString()}
        renderItem={({ item }) => <Directory directory={item} />}
      />
    </View>
  );
}

DirectoryScreen.navigationOptions = ({ navigation }) => {
  const directory = navigation.getParam('directory');
  return {
    headerTitle: directory.title,
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
    // headerLeft: (
    //   <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    //     <Item
    //       title="drawer"
    //       iconName="menu"
    //       onPress={() => navigation.toggleDrawer()}
    //     />
    //   </HeaderButtons>
    // ),
  };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
  },
});
