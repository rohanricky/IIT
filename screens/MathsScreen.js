import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ask } from '../components/Ask';
var Latex = require('react-latex');
import MathJax from 'react-native-mathjax';


export default function MathsScreen ()  {
    return (
      // <View style={{ flex: 1, flexDirection: 'column', justifyContent: "flex-start", alignItems: "center" }}>
        // {/* <Text>Hello, Maths!</Text> */}
        // {/* <Ask text="What is your name?"></Ask> */}
        // {/* <Ask question="This is the placeholder for a question. Better start preparing the backend for it" option1="1" option2="2" option3="3" option4="4"></Ask> */}
      <View>
        <MathJax
          html={'Solve the equation $\\frac{x-2}{x+3}=\\frac{x-3}{2}$'}
        />
        <MathJax
          html={'A. $x=1\\pm\\sqrt{6}$'}
        />
        <MathJax
          html={'B. $x=1\\pm2\\sqrt{3}$'}
        />
        <MathJax
          html={'C. $x=1\\pm2i$'}
        />
        <MathJax
          html={'D. $x=-1\\pm\\sqrt{6}$'}
        />
        {/* <MathJax
          // html={'Solution<br><br>$\\frac{x-2}{x+3}=\\frac{x-3}{2}$$<br>$2(x-2)=(x-3)(x+3)$<br>$$2x-4=x^2-9$<br>$x^2-2x-5=0$<br><br>$x=\\frac{-(-2)\\pm\\sqrt{(-2)^2-4(1)(-5)}}{2(1)}$<br>$x=\\frac{2\\pm\\sqrt{24}}{2}$<br>$x=1\\pm\\sqrt{6}$'}
        /> */}
      </View>
    );
}

MathsScreen.navigationOptions = {
    title: 'Maths',
  };
