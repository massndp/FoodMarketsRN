/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Shop} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Shop />
      <View style={{height: 38}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        FoodMarkets
      </Text>
    </View>
  );
};

export default SplashScreen;
