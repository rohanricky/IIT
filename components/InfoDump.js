import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Button } from 'react-native';
import { Card, Icon, CheckBox } from 'react-native-elements';
import Colors from '../constants/Colors';

export class InfoDump extends Component {
    render () {
        return (
            <View>
                <Card title={this.props.question}>
                    <Text>Some random text till we find a suitable question and answer</Text>
                </Card>
            </View>
        );
    }
};