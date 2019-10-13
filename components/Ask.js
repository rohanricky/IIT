import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Card, Icon, CheckBox } from 'react-native-elements';
import Colors from '../constants/Colors';
import Constants from 'expo-constants';

export class Ask extends Component {
    render () {
        return (
            // <View>
            //     {/* <Card style={{ width: '18rem' }}> */}
            //         <Text>{this.props.questionNumber}</Text>
            //         <Text>{this.props.text}</Text>
            //     {/* </Card> */}
            // </View>

            <Card title={this.props.question}>
                {/* <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text> */}
                <CheckBox
                left
                title={this.props.option1}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                // checked={this.state.checked}
            />

        <MathJax
          html={'A. $x=1\\pm2\\sqrt{3}$'}
        />

<MathJax
          html={'B. $x=1\\pm2\\sqrt{3}$'}
        />

<MathJax
          html={'C. $x=1\\pm2\\sqrt{3}$'}
        />

<MathJax
          html={'D. $x=1\\pm2\\sqrt{3}$'}
        />

            {/* <CheckBox
                left
                title={this.props.option2}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                // checked={this.state.checked}
            />

            <CheckBox
                left
                title={this.props.option3}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                // checked={this.state.checked}
            />

            <CheckBox
                left
                title={this.props.option4}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                // checked={this.state.checked}
            /> */}

            <View style={styles.fixToText}>
                <Button title='Prev' />
                <Button title='Next' />
            </View>
            </Card>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      margin: 10,
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
