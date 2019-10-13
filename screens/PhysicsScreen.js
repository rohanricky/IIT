import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default function PhysicsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, Physics!</Text>
      </View>
    );
}

PhysicsScreen.navigationOptions = {
    title: 'Physics',
};
