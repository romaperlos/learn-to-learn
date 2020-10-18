/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet, ScrollView, FlatList, Text, View,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { getDirectories } from '../redux/actions';
import { Directory } from '../components/Directory';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export function LearningScreen({ navigation }) {
  const directories = useSelector((state) => state.directories);
  const loading = useSelector((state) => state.loadingTest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDirectories());
  }, []);

  const forwardDirectoryHandler = (directory) => {
    navigation.navigate('Directory', { directoryTitle: directory.title });
  };

  return (
    <View>
      <Text>{loading && 'loading...'}</Text>
      {directories && (
      <FlatList
        data={directories}
        keyExtractor={(directory) => directory._id.toString()}
        renderItem={({ item }) => <Directory directory={item} onForward={forwardDirectoryHandler}/>}
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
          title="home"
          iconName="home"
          onPress={() => navigation.navigate('Main')}
        />
      </HeaderButtons>
    ),
  };
};

// const styles = StyleSheet.create({
//   center: {
//     alignItems: 'center',
//   },
// });
