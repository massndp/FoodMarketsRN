import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DumFood1, DumFood7, DumFood3, DumFood4, DumProfile} from '../../assets';
import {FoodCard, Gap} from '../../components';

const Home = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarkets</Text>
          <Text style={styles.desc}>Let's get some food</Text>
        </View>
        <Image style={styles.profileImg} source={DumProfile} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCard}>
          <Gap width={24} />
          <FoodCard image={DumFood1} />
          <FoodCard image={DumFood7} />
          <FoodCard image={DumFood3} />
          <FoodCard image={DumFood4} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  foodCard: {
    flexDirection: 'row',
    marginVertical: 12,
  },
});
