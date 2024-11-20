import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {image} from '../../assets';
import {vh, vw} from '../../utils/dimensions';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={image.splash}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.centreCircle}>
        <Text style={styles.text}>Quiz Khelo</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centreCircle: {
    // padding: 30,
    height: vh(200),
    width: vw(200),
    backgroundColor: 'white',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: '#004643',
    fontWeight: '800',
  },
});
