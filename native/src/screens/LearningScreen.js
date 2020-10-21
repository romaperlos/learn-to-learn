/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet, FlatList, Text, View,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { getDirectories } from '../redux/actions';
import { startBreadCrumbs } from '../redux/actions';
import { Directory } from '../components/Directory';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export function LearningScreen({ navigation }) {
  const directories = useSelector((state) => state.directories);
  const loading = useSelector((state) => state.loadingTest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDirectories());
  }, []);

  let parentDirectories = null;

  if (directories) {
    parentDirectories = directories.filter((el) => el.parent === null);
  }
  
  const forwardDirectoryHandler = (directory) => {
    dispatch(startBreadCrumbs(directory));
    navigation.navigate('Directory', { directory });
  };

  return (
    <View>
      <Text>{loading && 'loading...'}</Text>
      {directories && (
      <FlatList
        data={parentDirectories}
        keyExtractor={(directory) => directory._id.toString()}
        renderItem={({ item }) => <Directory directory={item} onForward={forwardDirectoryHandler} />}
      />
      )}
    </View>
  );
}

LearningScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'My courses',
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
          onPress={() => console.log('was pressed logout button')}
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

// const styles = StyleSheet.create({
//   center: {
//     alignItems: 'center',
//   },
// });
