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
import { VideoURL } from '../components/VideoURL';
import { TextURL } from '../components/TextURL';
import { TextArea } from '../components/TextArea';
import { PicURL } from '../components/picURL';
import { handlerLogout } from '../redux/actions';

export function ContentScreen({ navigation }) {
  const subDirectory = navigation.getParam('subDirectory');
  const content = useSelector((state) => state.content);

  let subDirectoryContent = null;

  if (content) {
    subDirectoryContent = content.filter((el) => el.directory === subDirectory._id);
  }

  console.log('>>>>>>>>>', subDirectoryContent);

  const showContent = (contentTitle) => {};

  return (
    <View style={styles.container}>
      {/* <View style={styles.topMenu}>
        <FlatList
          data={subDirectoryContent}
          keyExtractor={(contentTitle) => contentTitle._id.toString()}
          renderItem={({ item }) => <ContentTitle contentTitle={item} onShowContent={showContent} />}
        /> */}

      {/* </View> */}
      {/* <View style={styles.contentContainer}>
        <FlatList
          data={subDirectoryContent[0].item}
          keyExtractor={(contentItem) => contentItem.id.toString()}
          renderItem={({ item }) => {
            if (item.type === 'subtitle') {
              return <Subtitle subtitle={item.value} />;
            } else if (item.type === 'videoUrl') {
              return <VideoURL videoURL={item.value} />;
            } else if (item.type === 'link') {
              return <TextURL textURL={item.value} />;
            } else if (item.type === 'textArea') {
              return <TextArea textArea={item.value} />;
            } else if (item.type === 'picUrl') {
              return <PicURL picUrl={item.value} />;
            }
          }}
        /> */}
      <FlatList
        data={subDirectoryContent}
        keyExtractor={(contentTitle) => contentTitle._id.toString()}
        renderItem={({ item }) => (
          <View>
            <Title title={item.title}/>
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
            {/* <FlatList
              data={item.item}
              keyExtractor={(contentItem) => Date.now().toString()}
              renderItem={({ contentItem }) => {
                if (contentItem.type === 'subtitle') {
                  return <Subtitle subtitle={contentItem.value} />;
                } else if (contentItem.type === 'videoUrl') {
                  return <VideoURL videoURL={contentItem.value} />;
                } else if (contentItem.type === 'link') {
                  return <TextURL textURL={contentItem.value} />;
                } else if (contentItem.type === 'textArea') {
                  return <TextArea textArea={contentItem.value} />;
                } else if (contentItem.type === 'picUrl') {
                  return <PicURL picUrl={contentItem.value} />;
                }
              }}
            /> */}
          </View>
        )}
      />

      {/* </View> */}
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

const styles = StyleSheet.create({
  // container: {
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingTop: 15,
  // },
  // topMenu: {
  //   width: '100%',
  //   height: 'auto',
  //   marginTop: 30,
  //   paddingHorizontal: 10,
  //   borderBottomWidth: 1,
  //   borderColor: '#D8D8D8',
  // },
  // contentContainer: {

  //   marginHorizontal: 5,
  //   // alignItems: 'center',
  // },
});
