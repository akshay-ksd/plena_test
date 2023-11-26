import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Routes from './src/routes';
import colors from './src/components/constants/colors';
import TabScreen from './src/routes/tab/tab-navigations';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.secondary} barStyle="dark-content" />
      <Routes />
    </SafeAreaView>
  );
};

export default App;
