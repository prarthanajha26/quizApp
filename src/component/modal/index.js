import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const CustomModal = ({isVisible, status, onPress}) => {
  return (
    <Modal isVisible={isVisible} animationIn="slideInUp">
      <View style={styles.modalContainer}>
        <View style={styles.trueFalse}>
          <Text style={styles.text}>{status}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text2}>Next</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  trueFalse: {
    height: 100,
    width: 100,
    backgroundColor: '#004643',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#ABD1C6',
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: 'Black',
    fontSize: 20,
    fontWeight: '400',
  },
});
