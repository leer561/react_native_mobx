import React, {Component} from 'react';
import {View} from 'react-native';
import Counter from './components/counter'

export default class Home extends Component{
	render() {
		return (
			<View >
				<Counter />
			</View>
		);
	}
}