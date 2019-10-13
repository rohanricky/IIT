import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default function ChemistryScreen () {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, Chemistry!</Text>
      </View>
    );
}

ChemistryScreen.navigationOptions = {
    title: 'Chemistry',
  };