import React from 'react';
import { Text, StyleSheet } from 'react-native';


const TitleText =({text}) =>{
return (
    <Text style={styles.title}>{text}</Text>
);
}

const styles = StyleSheet.create({
    title: {
    fontSize: 22,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    borderRadius: 6,
    width: 200,
    textAlign: 'center',
    color: 'white'
    },
});

export default TitleText;
