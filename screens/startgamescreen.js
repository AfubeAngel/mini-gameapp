import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import PrimaryButton from '../components/ui/primarybutton';
import TitleText from '../components/ui/titletext';
import Colors from '@/constants/colors';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputNumber = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      alert('Invalid number!');
      Alert.alert('Invalid Number', 'Number must be a number between 1 and 99', [
        {
          text: 'Cancel',
          onPress: resetInputNumber,
          style: 'cancel',
        },
      ]);
      return;
    } else {
      onPickNumber(chosenNumber);
  }
}

  return (
    <View style={styles.screen}>
      <TitleText text="Guess My Number" />
      <View style={styles.inputContainer}>
        <Text style={styles.inputtitle} >Enter a Number</Text>
        <TextInput 
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
            <PrimaryButton title="Reset" onPress={resetInputNumber} />
            <PrimaryButton title="Confirm" onPress={confirmInputHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    padding: 10,
    marginTop: 50,
    
  },
  inputContainer: {
    maxWidth: '90%',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    paddingVertical: 25,
    borderRadius: 8,
    // elevation: 4,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
  },
  inputtitle: {
    fontSize: 22,
    color: Colors.primary2
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary2,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary2,
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 10,
    gap: 10
  },
});

export default StartGameScreen;