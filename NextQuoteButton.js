import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  } from 'react-native';


class NextQuoteButton extends React.Component {

  render() {
    return (
            <TouchableOpacity style = {styles.button} onPress={this.props.IncrementQuoteIndex}>
              <Text style= {styles.buttonText}>Next Thought</Text>
            </TouchableOpacity>
    );
  }
} 

const styles = StyleSheet.create ({
  button : {
    borderWidth : 2,
    borderColor : "#000",
    padding: 10,
    marginBottom : 20,
  },
  buttonText : {
    color : '#000',
    fontSize : 18,
  },
})


export default NextQuoteButton;