import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import logo from './logo.svg';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={logo} style={{width: 193, height: 110}} />
        <Text>Edit src/App.js and save to reload</Text>
      </View>
    );
  }
}
