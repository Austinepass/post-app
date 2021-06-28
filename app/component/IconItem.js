import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function IconItem({icon, text, ...otherProps}) {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons name={icon} {...otherProps} style={{margin: 8}}/>
        <Text style={styles.text}>{text}</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
  },
  text: {
      fontSize: 18,
      fontFamily: 'Avenir',
      fontWeight: '500',
      margin: 8,
      textAlign: 'center'
  }
});

export default IconItem;