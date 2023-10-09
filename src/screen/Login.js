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
    <SafeAreaView style={{width:deviceWidth,height:deviceHeight,alignItems:'center'}}>
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
              flex:1,
              flexDirection: 'row',
              height: deviceHeight,
              width: deviceWidth,
              alignItems: 'center',
              alignSelf:'center',
              justifyContent:'center',
              marginRight:'10%'
              
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
                  flex:1,
                  maxHeight:'15%',
                  width:'35%',
                  borderRadius: 30,
                  top: '8%',
                  left: '2%',
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

              <Text style={{left: '68%',bottom:'3%', color: '#419197', fontWeight: 'bold'}}>
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
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'

  },
  container3: {

    marginTop: '0%',
    backgroundColor: '#fff',
    height: '42%',
    width:'92%',
    borderRadius: 30,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
   
  },
  tinput: {
    fontWeight: '600',
    paddingLeft: '10%',
    paddingBottom: '3%',
    backgroundColor: '#ECF0F3',
    marginTop: '4%',
    borderRadius: 30,
    width:'96%',
    marginRight:'2%',
    marginLeft:'2%',
    textAlign: 'left',
    height: '15%',
    fontSize: 14,
  },
});

export default Login;
