import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function MessageScreen() {
  return (
    <View style={styles.mine_screen}>
      <Text>MessageScreen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mine_screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
