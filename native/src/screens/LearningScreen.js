/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FlatList, Text, View,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {
  getDirectories, startBreadCrumbs, getContent, handlerLogout,
} from '../redux/actions';
import { Directory } from '../components/Directory';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export function LearningScreen({ navigation }) {
  const directories = useSelector((state) => state.directories);
  const companyInfo = useSelector((state) => state.companyInfo);
  const loading = useSelector((state) => state.loadingDir);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDirectories());
    dispatch(getContent());
  }, []);

  let parentDirectories = null;

  if (directories) {
    parentDirectories = directories.filter((el) => el.parent === null);
  }

  function logout() {
    dispatch(handlerLogout());
    navigation.navigate('Main');
  }

  const forwardDirectoryHandler = (directory) => {
    dispatch(startBreadCrumbs(directory));
    navigation.navigate('Directory', { directory, companyInfo, logout });
  };

  return (
    <View>
      <Text>{loading && 'loading...'}</Text>
      {directories && (
      <FlatList
        data={parentDirectories}
        keyExtractor={(directory) => directory._id.toString()}
        renderItem={({ item }) => <Directory company={companyInfo} directory={item} onForward={forwardDirectoryHandler} />}
      />
      )}
    </View>
  );
}

LearningScreen.navigationOptions = ({ navigation }) => {
  const companyInfo = navigation.getParam('companyInfo');
  const logout = navigation.getParam('logout');

  return {
    headerTitle: 'My courses',
    headerStyle: {
      backgroundColor: companyInfo.mainColor,
    },
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="home"
          iconName="home"
          onPress={() => navigation.navigate('Main')}
        />
        <Item
          title="logout"
          iconName="log-out"
          onPress={() => logout()}
        />
      </HeaderButtons>
    ),
  };
};
