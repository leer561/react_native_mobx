import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Counter from './components/counter'
import News from './components/news'

export default class Home extends Component{
	render() {
		return (
			<View style={{flex:1}}>
				<Counter />
				<News />
			</View>

		);
	}
}