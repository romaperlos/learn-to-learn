/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet, Text, TextInput, View, Image, Button,
} from 'react-native';
import { handlerLogin } from '../redux/actions';

export function LoginScreen({}) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const loadingLogin = useSelector((state) => state.loadingLogin);
  const errorLogin = useSelector((state) => state.errorLogin);
  

  console.log({
    email: inputEmail,
    password: inputPassword,
  });

  // const [error, setError] = useState(false);

  return (
    <View style={styles.loginForm}>
      <TextInput
        style={styles.textInputs}
        textContentType="emailAddress"
        onChangeText={(inputEmail) => setInputEmail(inputEmail)}
        value={inputEmail}
      />
      <TextInput
        style={styles.textInputs}
        textContentType="password"
        onChangeText={(inputPassword) => setInputPassword(inputPassword)}
        value={inputPassword}
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
  );
}

const styles = StyleSheet.create({
  textInputs: {
    width: 250,
    height: 60,
    borderColor: 'gray',
  },
  loginButton: {
    backgroundColor: 'green',
    flex: 3,
  },
});
