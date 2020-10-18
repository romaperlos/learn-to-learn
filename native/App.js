// import { StatusBar } from 'expo-status-bar';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import { store } from './src/redux/store';
// import { getTestText } from './src/redux/actions';
// import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';

// const WithRedux = (Component) => (props) => (
//   <Provider store={store}>
//     <Component {...props} />
//   </Provider>
// );

export default function App() {
  // const test = useSelector((state) => state.test);
  // const loading = useSelector((state) => state.loadingTest);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTestText());
  // }, []);

  const [isReady, setIsReady] = useState(false);

  // Встроенное в expo свойство AppLoading, которое не показывает приложение пользователю, пока не подгрузились все асинхронные запросы
  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <AppNavigation />;
  //   <View style={styles.container}>
  //     <Text>{loading && 'loading...'}</Text>
  //     <Text>{test && test}</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

// export default WithRedux(App);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
