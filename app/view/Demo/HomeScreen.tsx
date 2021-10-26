import React from 'react';
import {Button, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Actions from './action';

export default function HomeScreen() {
  let receive = useSelector<any, any>(state => state.demo.receive);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Text>{receive}</Text>
      <Button title="Add" onPress={() => dispatch(Actions.send(receive + 1))} />
    </View>
  );
}
