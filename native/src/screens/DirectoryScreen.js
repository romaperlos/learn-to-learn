/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { SubDirectory } from '../components/SubDirectory';
import { LeftDirectory } from '../components/LeftDirectory';

export function DirectoryScreen({ navigation }) {
  const directory = navigation.getParam('directory');
  const directories = useSelector((state) => state.directories);
  const breadCrumbs = useSelector((state) => state.subs);

  const dispatch = useDispatch();

  let initialSubDirectories;
  if (directories) {
    initialSubDirectories = directories.filter((el) => el.parent === directory._id);
  }
  const [subDirectories, setSubDirectories] = useState(initialSubDirectories);

  const showThemes = (leftDirectory) => {
    const newSubDirectories = directories.filter((el) => el.parent === leftDirectory._id);
    console.log(subDirectories, '!!!!!!!!!!!!!!!!');
    return setSubDirectories(newSubDirectories);
    // dispatch(startBreadCrumbs(leftDirectory));
  };

  // console.log(subDirectories, '<<<<<<<<<<<<<<<<<<<');

  return (
    <View style={styles.container}>
      <View style={styles.leftMenu}>
        <FlatList
          data={breadCrumbs}
          keyExtractor={(sub) => sub._id.toString()}
          renderItem={({ item }) => <LeftDirectory leftDirectory={item} onShowThemes={showThemes} />}
        />
      </View>
      <View style={styles.rightMenu}>
        <FlatList
          data={subDirectories}
          keyExtractor={(subDirectory) => subDirectory._id.toString()}
          renderItem={({ item }) => <SubDirectory subDirectory={item} />}
        />
      </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
  },
  leftMenu: {
    flex: 2,
  },
  rightMenu: {
    flex: 2,
  },
});
