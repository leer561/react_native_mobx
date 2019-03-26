import React, {Component} from 'react';
import {Text, View} from 'react-native';

import CustomButton from '../../../common/components/button'

export default class Counter extends Component{
	render() {
		return (
			<View >
				<Text>"我是一个计数器"</Text>
				<CustomButton />
			</View>
		);
	}
}