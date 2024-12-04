import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import TitleText from '@/components/ui/titletext';
import Colors from '../constants/colors';
import PrimaryButton from '@/components/ui/primarybutton';

const deviceWidth = Dimensions.get('window').width;

const GameOverScreen = ({ roundsNumber, userNumber, onGameRestart }) => {

  return (
    <View style={styles.container}>
      <TitleText text="GAME OVER!!" />
      <View style={styles.imageContainer}>
      <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvdBsN3Y2r8ishznD8zGSdOHsDrj0DqFsAA&s' }}
          style={styles.image}
        />
      </View>

      <Text style={styles.summary}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}.</Text> </Text>
      <PrimaryButton title="Start New Game" onPress={onGameRestart} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 40,
    padding: 20,
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150: 300,
    height: deviceWidth < 380 ? 150: 300,
    borderWidth: 3,
    borderColor: Colors.primary2,
    borderRadius: deviceWidth < 380 ? 75: 150, //should be half of the width and height for circular shape
    overflow: 'hidden',
    margin: 15,
  },
  image: {
    width: '100%', //take up the width of the container
    height: '100%',
  },
  summary: {
    fontSize: 22,
    textAlign: 'center'
  },
  highlight: {
    fontWeight: 'bold',
    color: Colors.primary3,
  },
});

export default GameOverScreen;
