import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Colors from '@/constants/colors';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


const NumberGuessContainer =({children}) => {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{children}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: Colors.primary2,
    padding: deviceHeight < 400 ? 10 : 12,
    borderRadius: 8,
    textAlign: 'center',
    maxWidth: '80%',
    width: '80%',
  },
  title: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: 'bold',
  },
});

export default NumberGuessContainer;
