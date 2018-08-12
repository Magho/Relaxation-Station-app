import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  } from 'react-native';
import Quote from './Quote';

class QuoteScreen extends React.Component {
  render() {
    return (
            <View style={styles.container}>
              <Quote quoteText="Quote goes here!" quoteSource="- source Here"/>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161737',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QuoteScreen;
