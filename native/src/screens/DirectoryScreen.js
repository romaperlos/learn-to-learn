/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { addBreadCrumbs, deleteBreadCrumbs } from '../redux/actions';
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
    const breadCrumbsIndex = breadCrumbs.findIndex((el) => el._id === leftDirectory._id);
    const cloneBreadCrumbs = [...breadCrumbs];
    cloneBreadCrumbs.splice(breadCrumbsIndex + 1, Infinity);
    dispatch(deleteBreadCrumbs(cloneBreadCrumbs));
    return setSubDirectories(newSubDirectories);
  };

  const ChooseSubDirectory = (subDirectory) => {
    if (subDirectory.lastDir) {
      return navigation.navigate('Content', { subDirectory });
    }
    dispatch(addBreadCrumbs(subDirectory));
    const newSubDirectories = directories.filter((el) => el.parent === subDirectory._id);
    return setSubDirectories(newSubDirectories);
  };

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
          renderItem={({ item }) => <SubDirectory subDirectory={item} onChooseSubDirectory={ChooseSubDirectory} />}
        />
      </View>
    </View>
  );
}

DirectoryScreen.navigationOptions = ({ navigation }) => {
  const directory = navigation.getParam('directory');
  return {
    headerTitle: 'Back to My Courses',
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
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  leftMenu: {
    flex: 1,
    marginHorizontal: 5,
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor:'#D8D8D8',
  },
  rightMenu: {
    flex: 3,
    marginHorizontal: 5,
    // alignItems: 'center',
  },
});
