import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, useWindowDimensions, ScrollView } from 'react-native';
import TitleText from '@/components/ui/titletext';
import Colors from '../constants/colors';
import PrimaryButton from '@/components/ui/primarybutton';

// const deviceWidth = Dimensions.get('window').width;

const GameOverScreen = ({ roundsNumber, userNumber, onGameRestart }) => {

  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={styles.mainContainer}>
    <View style={styles.container}>
      <TitleText text="GAME OVER!!" />
      <View style={[styles.imageContainer, imageStyle]}>
      <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvdBsN3Y2r8ishznD8zGSdOHsDrj0DqFsAA&s' }}
          style={styles.image}
        />
      </View>

      <Text style={styles.summary}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}.</Text> </Text>
      <PrimaryButton title="Start New Game" onPress={onGameRestart} />
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  mainContainer:{
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 40,
    padding: 20,
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150: 300,
    // height: deviceWidth < 380 ? 150: 300,
    // borderRadius: deviceWidth < 380 ? 75: 150, //should be half of the width and height for circular shape
    borderWidth: 3,
    borderColor: Colors.primary2,
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
