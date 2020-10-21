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
import { handlerLogin } from '../redux/actions';

export function MainScreen({ navigation }) {
  const goToMyCourse = () => {
    navigation.navigate('Learning');
  };
  // Логика Логина для Юзера
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const loadingLogin = useSelector((state) => state.loadingLogin);
  const errorLogin = useSelector((state) => state.errorLogin);

  // console.log({
  //   email: inputEmail,
  //   password: inputPassword,
  // });

  return (
    <ScrollView style={styles.wrapper}>
      <CompanyInfo company={DATA[0]} />
      <View style={styles.container}>
        {!loginUser
        && (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              textContentType="emailAddress"
              onChangeText={(inputEmail) => setInputEmail(inputEmail)}
              value={inputEmail}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              textContentType="password"
              onChangeText={(inputPassword) => setInputPassword(inputPassword)}
              value={inputPassword}
              placeholder="Password"
            />
            <Button
              style={styles.loginButton}
              title="LOGIN"
              onPress={() => dispatch(handlerLogin(
                {
                  email: inputEmail,
                  password: inputPassword,
                },
              ))}
            />
          </View>
        )}
        {errorLogin && <Text style={styles.title}>Something went wrong...</Text>}
        {loginUser && <Text onPress={goToMyCourse} style={styles.title}>START EDUCATION</Text>}
      </View>
    </ScrollView>
  );
}

// свойства для конкретного экрана
MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Learn-to-Learn',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="profile"
        iconName="user"
        onPress={() => console.log('was pressed user button')}
      />
      <Item
        title="login"
        iconName="log-in"
        onPress={() => console.log('was pressed login button')}
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
  wrapper: {
    padding: 10,
  },
  title: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: THEME.MAIN_COLOR,
    paddingVertical: 20,
    marginVertical: 1,
    width: '100%',
    borderWidth: 1,
    color: THEME.MAIN_FONT_COLOR,
    borderRadius: 10,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontFamily: 'poppins-regular',
    width: '100%',
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    marginBottom: 5,
    borderRadius: 10,
  },
});
