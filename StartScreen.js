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
                <Text style={styles.reayText}>I'm ready to relax...</Text>
              </TouchableOpacity>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reayText : {
    fontSize   : 20,
    fontStyle  : 'italic',
    color      : '#ffffff',
  },
  button : {
    backgroundColor : '#000',
    borderRadius    : 20,
    padding         : 10,
    marginBottom    : 20,
  },
  buttonImage : {
    width  : 200,
    height : 200,
  }
});

export default StartScreen;