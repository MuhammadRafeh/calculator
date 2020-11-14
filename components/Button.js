import React from 'react';
import { 
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Text } from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4

const Button = (props) => {
	const buttonStyles = [styles.button];
	const textStyles = [styles.text];

 	if (props.size === 'double') {
    	buttonStyles.push(styles.buttonDouble);
 	}

 	if (props.theme === 'secondary') {
    	buttonStyles.push(styles.buttonSecondary);
    	textStyles.push(styles.textSecondary);
  	} else if (props.theme === 'accent') {
    	buttonStyles.push(styles.buttonAccent);
  	}

 	return(
		<TouchableOpacity 
			onPress={props.onPress}
			style={buttonStyles}>
			<Text style={textStyles}>{props.text}</Text>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	button: {
		flex: 1,
		backgroundColor: '#333333',
		height: Math.floor(buttonWidth - 10),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: Math.floor(buttonWidth),
		margin: 5
	},
	text: {
		color: 'white',
		fontSize: 25,
	},
	textSecondary : {
		color: '#060606'
	},
	buttonDouble: {
		flex: 0,
		width: screen.width / 2 - 10,
		alignItems: 'flex-start',
		paddingLeft: 40,
	},
	buttonSecondary: {
		backgroundColor: '#a6a6a6'
	},
	buttonAccent: {
		backgroundColor: '#f09a36'
	}
})
