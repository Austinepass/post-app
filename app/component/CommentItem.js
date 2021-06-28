import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NameItem from './NameItem';

function CommentItem({name, image, subtext, comment}) {
  return (
    <View style={styles.container}>
        <NameItem name={name} image={image} subtext={subtext}/>
        <Text style={styles.line}>{comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      margin: 8,
      borderRadius: 8,
      backgroundColor: 'white',
      padding: 5
  },
  line: {
      fontSize: 18,
      margin: 5,

  }
});

export default CommentItem;