
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import PrimaryButton from '@/components/ui/primarybutton';
import TitleText from '@/components/ui/titletext';
import Colors from '@/constants/colors';
import {Ionicons} from '@expo/vector-icons';
import NumberGuessContainer from '../components/games/NumberGuessContainer';
import GuessLogItem from '../components/games/guesslogitem';

export default function MainGameScreen(userNumber, onGameOver) {

  const generateRandomBetween = (min, max, exclude) => {
    const randNum = Math.floor(Math.random() * (max - min)) + min;

    if (randNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randNum;
    }
  };

  const firstGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(firstGuess);
  const [guessRounds, setGuessRounds] = useState([firstGuess]);
  const [gameOverState, setGameOverState] = useState(false);

  let minNum = 1;
  let maxNum = 100;

  const nextGuessHandler =(direction) =>{
    if (
      (direction==="lower" && currentGuess < userNumber) || (direction==="higher" && currentGuess > userNumber)
    ) {
      Alert.alert('Don\'t lie!', 'You know that this is not correct...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction==='lower'){
      maxNum = currentGuess;
    } else {
      minNum = currentGuess + 1;
    }
    const newRandNum = generateRandomBetween(minNum, maxNum, currentGuess);
    setCurrentGuess(newRandNum);
    setGuessRounds((prevRounds) => [newRandNum, ...prevRounds]);
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
      setGameOverState(true); 
      // minNum = 1;
      // maxNum = 100;
    }
  }, [currentGuess,userNumber,onGameOver]);

  const handleIncrement = () => {
    if (gameOverState) return; 
    nextGuessHandler('higher');
  };

  const handleDecrement = () => {
    if (gameOverState) return; 
    nextGuessHandler('lower');
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.container}>
      <TitleText text="Opponent's Guess" />
      <NumberGuessContainer children={currentGuess}/>
      <View style={styles.currentGuessContainer}>
        <Text style={styles.currentGuesstitle} >Higher or lower?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="+" onPress={handleIncrement} />
          <PrimaryButton title="-" onPress={handleDecrement} />
        </View>
      </View>
      <View style={styles.listContainer}>
      <FlatList 
        data={guessRounds} 
        renderItem={({ item, index }) => (
          <GuessLogItem roundNumber={guessRoundsListLength - index} guess={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    padding: 10,
    marginTop: 50,
  },
 currentGuessContainer: {
    maxWidth: '90%',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    paddingVertical: 25,
    borderRadius: 8,
    padding: 20,
    // elevation: 4,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
  },
 currentGuesstitle: {
    fontSize: 22,
    color: Colors.primary2
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
  listContainer: {
    flex: 1,
    padding: 16,
  }
});
