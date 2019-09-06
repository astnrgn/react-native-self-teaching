import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import logo from './logo.svg';

export default class App3 extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{width: 150, height: 150}}
          source={{
            uri:
              'https://miro.medium.com/max/1200/1*BFV8Gwt5BILa-xv04IK2ng.png',
          }}
        />
        <Text
          style={{color: 'blue'}}
          onPress={() => Linking.openURL('http://google.com')}>
          Google
        </Text>
        <Text>Edit src/App.js and save to reload</Text>
      </View>
    );
  }
}
