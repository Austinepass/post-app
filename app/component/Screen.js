import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

function Screen({children}) {
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: StatusBar.currentHeight
  }
});

export default Screen;