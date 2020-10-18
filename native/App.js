import { Provider } from 'react-redux';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { store } from './src/redux/store';
import { bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // Встроенное в expo свойство AppLoading,
  // которое не показывает приложение пользователю,
  // пока не подгрузились все асинхронные запросы
  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
