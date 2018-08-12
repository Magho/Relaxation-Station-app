import React from 'react';
import {createStackNavigator} from 'react-navigation';


import StartScreen from './StartScreen';
import QuoteScreen from './QuoteScreen';
 
export default class App extends React.Component {
  render() {
    return (
          <AppNav/>
    );
  }
}

const AppNav = createStackNavigator({
  Login : StartScreen,
  Home  : QuoteScreen,
});
