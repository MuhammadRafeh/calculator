import React from 'react';
import { 
	TouchableOpacity,
	StyleSheet,
	Text } from 'react-native';

const Button = (props) => (
	<TouchableOpacity 
		onPress={props.onPress}
		style={styles.button}>
		<Text style={styles.text}>{props.text}</Text>
	</TouchableOpacity>
)

export default Button

const styles = StyleSheet.create({
	button: {
		flex: 1,
		backgroundColor: '#333333'
	},
	text: {
		color: 'white',
		fontSize: 25,
		alignItems: 'center'
	}
})
