/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  View, Text, StyleSheet, FlatList, ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { Description } from '../components/Description';
import { VideoURL } from '../components/VideoURL';
import { TextURL } from '../components/TextURL';
import { TextArea } from '../components/TextArea';
import { PicURL } from '../components/picURL';

export function ContentScreen({ navigation }) {
  const subDirectory = navigation.getParam('subDirectory');
  const content = useSelector((state) => state.content);

  let subDirectoryContent = null;

  if (content) {
    subDirectoryContent = content.filter((el) => el.directory === subDirectory._id);
  }

  return (
    <View>
      <FlatList
        data={subDirectoryContent}
        keyExtractor={(contentTitle) => contentTitle._id.toString()}
        renderItem={({ item }) => (
          <View>
            <Title title={item.title} />
            <Description description={item.description} />
            {item.item.map((el) => {
              if (el.type === 'subtitle') {
                return <Subtitle subtitle={el.value} />;
              } else if (el.type === 'videoUrl') {
                return <VideoURL videoURL={el.value} />;
              } else if (el.type === 'link') {
                return <TextURL textURL={el.value} />;
              } else if (el.type === 'textArea') {
                return <TextArea textArea={el.value} />;
              } else if (el.type === 'picUrl') {
                return <PicURL picUrl={el.value} />;
              }
            })}
          </View>
        )}
      />
    </View>
  );
}

ContentScreen.navigationOptions = ({ navigation }) => {
  const companyInfo = navigation.getParam('companyInfo');
  const logout = navigation.getParam('logout');
  return {
    headerTitle: 'My content',
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
