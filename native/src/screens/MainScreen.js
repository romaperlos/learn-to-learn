/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, Text, StyleSheet, Button, ScrollView, TextInput,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CompanyInfo } from '../components/CompanyInfo';
import { DATA } from '../data';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { handlerLogin, handlerLogout } from '../redux/actions';

export function MainScreen({ navigation }) {
  // Логика Логина для Юзера
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const loadingLogin = useSelector((state) => state.loadingLogin);
  const errorLogin = useSelector((state) => state.errorLogin);
  const companyInfo = useSelector((state) => state.companyInfo);

  function logout() {
    dispatch(handlerLogout());
    navigation.navigate('Main');
  }

  const goToMyCourse = () => {
    navigation.navigate('Learning', { companyInfo, logout });
  };

  return (
    <ScrollView style={styles.wrapper}>

      {!loginUser
        && (
          <View style={styles.center}>
            <Text style={styles.text}>Please sign in to start</Text>
            <TextInput
              style={styles.input}
              textContentType="emailAddress"
              onChangeText={(inputEmail) => setInputEmail(inputEmail)}
              value={inputEmail}
              placeholder="Email"
              clearButtonMode="always"
            />
            <TextInput
              style={styles.input}
              textContentType="password"
              onChangeText={(inputPassword) => setInputPassword(inputPassword)}
              value={inputPassword}
              placeholder="Password"
              secureTextEntry={true}
              clearButtonMode="always"
              
              
            />
            <Text
              style={styles.loginButton}
              clearButtonMode="always"
              onPress={() => dispatch(handlerLogin(
                {
                  email: inputEmail,
                  password: inputPassword,
                },
              ))}
            >
              Sign In
            </Text>
          </View>
        )}
      {errorLogin && <Text style={styles.title}>Something went wrong...</Text>}
      {loginUser && (
      <>
        {companyInfo && <CompanyInfo company={companyInfo} />}
        {companyInfo && (
        <Text
          onPress={goToMyCourse}
          style={{
            fontFamily: 'poppins-regular',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: companyInfo.mainColor,
            paddingVertical: 20,
            marginVertical: 1,
            width: '100%',
            borderWidth: 1,
            color: THEME.MAIN_FONT_COLOR,
            borderRadius: 10,
          }}
        >
          START EDUCATION
        </Text>
        )}
      </>
      )}
    </ScrollView>
  );
}

// свойства для конкретного экрана

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Learn-to-Learn',
  headerStyle: {
    backgroundColor: 'grey',
  },
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      {/* <Item
        title="profile"
        iconName="user"
        onPress={() => console.log('was pressed user button')}
      /> */}
      <Item
        title="logout"
        iconName="log-out"
        onPress={() => console.log('was pressed logout button')}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="appInfo"
        iconName="info"
        onPress={() => navigation.navigate('About')}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    // backgroundColor: companyInfo.mainColor,
    paddingVertical: 20,
    marginVertical: 1,
    width: '100%',
    borderWidth: 1,
    color: THEME.MAIN_FONT_COLOR,
    borderRadius: 10,
  },
  center: {
    paddingTop: 130,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontFamily: 'poppins-regular',
    width: '100%',
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 5,
    borderRadius: 7,
  },
  text: {
    fontFamily: 'poppins-regular',
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 20,
  },
  loginButton: {
    fontFamily: 'poppins-regular',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'grey',
    paddingVertical: 15,
    marginVertical: 1,
    width: '100%',
    borderWidth: 1,
    color: 'white',
    borderRadius: 7,
  },
});
