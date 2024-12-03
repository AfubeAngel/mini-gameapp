import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/colors';

const PrimaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} 
    onPress={onPress}
    activeOpacity={0.75} >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28,
    alignItems: 'center',
    width: '50%',
    // elevation: '2',
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
