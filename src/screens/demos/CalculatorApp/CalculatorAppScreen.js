import React from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class CalculatorAppScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
        </View>
        <View style={{
          flexDirection: 'row',

        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => {
            return(
              <Button style={{
                width: 50,
                height: 50
              }} title={number.toString()}/>
            );
          })}
        </View>
      </View>
    );
  }
}