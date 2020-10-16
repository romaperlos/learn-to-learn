import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { store } from './src/redux/store';

import { getTestText } from './src/redux/actions';

const WithRedux = (Component) => (props) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);

function App() {
  const test = useSelector((state) => state.test);
  const loading = useSelector((state) => state.loadingTest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestText());
  }, []);

  return (
    <View style={styles.container}>
      <Text>{loading && 'loading...'}</Text>
      <Text>{test && test}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default WithRedux(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
