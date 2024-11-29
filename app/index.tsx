import { Text, View, StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "../screens/startgamescreen";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';

const image = {uri: 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PeUaM2pw4N2tAXHDF6v2YnvRyjQlqmUlUw&s'};

export default function Index() {
  return (
    <View style={styles.indexcontainer}>
        <LinearGradient
        colors={['#4e0329', '#ddb52f', 
        'transparent']}
        style={styles.background}
      />
      <ImageBackground source={image} 
      resizeMode="cover" 
      style={styles.image}
      imageStyle={{opacity: 0.15}}>
       <StartGameScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  indexcontainer: {
    flex: 1,
    backgroundColor: '#ddb52f',
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
