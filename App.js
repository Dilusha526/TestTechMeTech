import React, { useEffect } from 'react';
import Login from './src/screen/Login';
import {View} from 'react-native';
import Splash from 'react-native-splash-screen';

const App = () => {
  useEffect(()=>{
    Splash.hide();
  },[])
  return (
    <View>
      <Login />
    </View>
  );
};

export default App;
