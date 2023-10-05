import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function Login() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#12486B" barStyle="light-content" />
      <ScrollView>
        <LinearGradient
          colors={['#419197', '#419197', '#78D6C6', '#78D6C6']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}>
          <ImageBackground
            resizeMode={'contain'}
            imageStyle={{
              transform: [{rotate: '90deg'}],
              marginTop: '20%',
              height: 520,
              width: 560,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            style={{flex: 1, height: 'auto'}}
            source={require('../assets/drop.png')}></ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              height: deviceHeight,
              width: 100,
              alignItems: 'center',
              marginLeft: '4%',
              marginRight: '8%',
            }}>
            {/* ********************Start Login Form************************** */}

            <View style={styles.container3}>
              <TextInput
                placeholderTextColor={'gray'}
                placeholder="Company"
                style={styles.tinput}
              />
              <TextInput
                placeholderTextColor={'gray'}
                placeholder="User Name"
                style={styles.tinput}
              />
              <TextInput
                placeholderTextColor={'gray'}
                placeholder="Password"
                style={styles.tinput}
                secureTextEntry={true}
              />

              <LinearGradient
                colors={['#419197', '#419197', '#78D6C6', '#78D6C6']}
                style={{
                  flex: 1,
                  maxHeight: 50,
                  width: 140,
                  borderRadius: 30,
                  top: 25,
                  left: 20,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}>
                <Text style={styles.loginText} onPress={() => {}}>
                  Login
                </Text>
              </LinearGradient>

              <Text style={{left: '70%', color: '#419197', fontWeight: 'bold'}}>
                Need a Help
              </Text>
            </View>

            {/* **********************End Login Form***************************** */}
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F709C',
  },
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  container3: {
    marginTop: '280%',
    backgroundColor: '#fff',
    height: 290,
    borderRadius: 30,
    width: 400,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  tinput: {
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 8,
    backgroundColor: '#ECF0F3',
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 30,
    width: 360,
    textAlign: 'left',
    height: 45,
    fontSize: 14,
  },
});

export default Login;
