import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vh, vw} from '../../utils/dimensions';

const Score = ({route, navigation}) => {
  const handleNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profile} />
        <Text style={styles.nameText}>{route.params?.name}</Text>
      </View>

      <Text style={styles.scoreBoard}>Score Board</Text>

      <View style={styles.maincontainer}>
        <Text style={styles.announce}>Your Score</Text>
        <Text style={styles.score}>{route.params?.score}</Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004643BF',
    paddingHorizontal: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  profile: {
    height: vh(50),
    width: vw(50),
    backgroundColor: 'white',
    borderRadius: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: vh(20),
    // justifyContent: 'center',
    alignItems: 'center',
  },
  announce: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
  score: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
  button: {
    backgroundColor: '#ABD1C6',
    // padding: 30,
    paddingHorizontal: vw(40),
    paddingVertical: vh(20),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  scoreBoard: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: vh(30),
    color: 'white',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
  },
  maincontainer: {
    flex: 0.5,
    // marginTop: vh(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
