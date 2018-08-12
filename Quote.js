import React from 'react';
import {View , Text, StyleSheet, Platform} from 'react-native';

class Quote extends React.Component {
	render () {

		return(
			<View style= {styles.quoteContainer}>
				<Text style = {styles.quoteText}> "{this.props.quoteText}" </Text>
				<Text style = {styles.sourceText}> - {this.props.quoteSource} </Text>
			</View>

		);
	}
}

const styles = StyleSheet.create ({

	quoteContainer : {
		flex           : 1,
		justifyContent : 'center', 
	},
	quoteText : {
		fontFamily     : (Platform.OS === 'ios') ? 
			'AvenireNext-Bold' : 'Roboto',
		fontSize       : 36,
		color          : '#000',
		marginVertical : 30,
		padding        : 10,		
	},
	sourceText : {
		fontFamily     : (Platform.OS === 'ios') ? 
			'AvenireNext-Bold' : 'Roboto',
		fontSize       : 20,
		color          : '#000',
		textAlign      : 'right',
		fontStyle      : 'italic',	
		padding        : 10,		
	},
})

export default Quote;