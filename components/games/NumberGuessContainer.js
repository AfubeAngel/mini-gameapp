import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '@/constants/colors';

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
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    width: '80%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default NumberGuessContainer;
