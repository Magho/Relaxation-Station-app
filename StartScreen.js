import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  } from 'react-native';

const zenImage = require('./assets/zenImage.jpeg');

class StartScreen extends React.Component {

  static navigationOptions = {
    header : null
  }

  render() {
    return (
            <View style={styles.container}>
              <TouchableOpacity style= {styles.button} onPress= {() => this.props.navigation.navigate('Home')}>
                <Image source={zenImage} style={styles.buttonImage}/>
              </TouchableOpacity>
              <Text style={styles.reayText}>I'm ready to relax...</Text>
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
  reayText : {
    fontSize   : 20,
    fontStyle  : 'italic',
    color      : '#ffffff',
  },
  button : {
    backgroundColor : '#859a9b',
    borderRadius    : 20,
    padding         : 10,
    marginBottom    : 20,
    shadowColor     : '#303838',
    shadowOffset    : {width : 0 , height : 5},
    shadowRadius     : 10,
    shadowOpacity   : 0.35,
  },
  buttonImage : {
    width  : 200,
    height : 200,
  }
});

export default StartScreen;