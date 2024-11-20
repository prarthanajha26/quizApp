import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const handleLevel = level => {
    console.log(level);
    if (name) {
      navigation.navigate('Quiz', {level, name});
    } else {
      Alert.alert('Please fill your name');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Choose Level</Text>
      <TextInput
        style={styles.level}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TouchableOpacity
        style={styles.level}
        onPress={() => handleLevel('normal')}>
        <Text style={styles.text}>Normal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.level}
        onPress={() => handleLevel('medium')}>
        <Text style={styles.text}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.level}
        onPress={() => handleLevel('hard')}>
        <Text style={styles.text}>Hard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004643BF',
    padding: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  level: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});
