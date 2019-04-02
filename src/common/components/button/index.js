import React, {Component} from 'react';
import {ThemeProvider,Button} from 'react-native-elements';
import {colors} from "../../../style/variables";

export default class CustomButton extends Component {
	render() {
		return (
			<ThemeProvider theme={{colors}}>
				<Button theme={{colors}} {...this.props}  />
			</ThemeProvider>
		);
	}
}