import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  LayoutAnimation,
  } from 'react-native';


import Quote from './Quote';
import NextQuoteButton from './NextQuoteButton';


const {quotes} = require('./quotes.json');
const Image2   = require('./assets/image2.jpeg');
const tranquil = {
  duration : 500,
  create : {
    duration : 1000,
    delay : 300,
    type : LayoutAnimation.Types.easeIn,
    property : LayoutAnimation.Properties.opacity,
  },
  update : {
    type : LayoutAnimation.Types.easeOut,
    property : LayoutAnimation.Properties.opacity,
  },
  delete : {
    duration : 200,
    type : LayoutAnimation.Types.easeOut,
    property : LayoutAnimation.Properties.opacity,
  },
}


class QuoteScreen extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      quoteIndex : 3,
    }
    this.IncrementQuoteIndex = this.IncrementQuoteIndex.bind(this);
  }

  componentWillUpdate () {
    LayoutAnimation.configureNext(tranquil);
  }

  IncrementQuoteIndex () {
    let newIndex;
    if (this.state.quoteIndex + 1 === quotes.length) {
      newIndex = 0;
    } else {
      newIndex = this.state.quoteIndex + 1;
    }

    this.setState({
      quoteIndex : newIndex,
    })
  }

  render() {
    return (
            <ImageBackground source={Image2} style={{width: '100%', height: '100%'}} >
              <View style={styles.container}>
                <Quote 
                  key={this.state.quoteIndex}
                  quoteText = {quotes[this.state.quoteIndex].text}
                  quoteSource={quotes[this.state.quoteIndex].source}
                />
                <NextQuoteButton IncrementQuoteIndex = {this.IncrementQuoteIndex}/>
              </View>
            </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QuoteScreen;
