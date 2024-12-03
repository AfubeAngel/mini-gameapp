import { useState } from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "../screens/startgamescreen";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import MainGameScreen from '../screens/maingamescreen';
import Colors from "@/constants/colors";
import GameOverScreen from "../screens/gameoverscreen";

const image = {uri: 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PeUaM2pw4N2tAXHDF6v2YnvRyjQlqmUlUw&s'};

export default function Index() {
  const [userNumber, setUserNumber] = useState<number | null>(null); 
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setguessRounds] = useState(0);


  const pickNumberHandler = (pickedNumber: any) =>{
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  const gameIsOver = (numberOfRounds: number) => {
    setGameOver(true);
    setguessRounds(numberOfRounds);
  }

  const restartGameHandler =()=>{
    setUserNumber(null);
    setGameOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = <MainGameScreen userNumber={userNumber} onGameOver={gameIsOver} />;
  }

  if (gameOver && userNumber){
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onGameRestart={restartGameHandler} />;
  }

  return (
    <View style={styles.indexcontainer}>
        <LinearGradient
        colors={[ Colors.primary3, Colors.primary2, 
        'transparent']}
        style={styles.background}
      />
      <ImageBackground source={image} 
      resizeMode="cover" 
      style={styles.image}
      imageStyle={{opacity: 0.15}}>
        <SafeAreaView style={{flex: 1}}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  indexcontainer: {
    flex: 1,
    backgroundColor: Colors.primary2,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
