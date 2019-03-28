import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

import PageTitle from '../../../common/components/page-title'
import CustomButton from '../../../common/components/button'
import {CounterWrapper,CounterNumber} from "./style";

export default class Counter extends Component{
	constructor(props) {
		super(props)
		this.state = {counter: 0};
	}

	add = ()=>{
		let data = this.state.counter + 1
		this.setState({
			counter: data
		});
	}

	reduce = ()=>{
		let data = this.state.counter - 1
		this.setState({
			counter: data
		});
	}

	render() {
		return (
			<View >
				<PageTitle title="这是个计数器" />
				<CounterWrapper>
					<CustomButton
						icon={
							<Icon name="minus"
								  size={15}
								  color="white"/>
						}
						containerStyle={{flex:1}}
						onPress={this.reduce}
					/>
					<CounterNumber>{this.state.counter}</CounterNumber>
					<CustomButton
						icon={
							<Icon name="plus"
								  size={15}
								  color="white"/>
						}
						containerStyle={{flex:1}}
						onPress={this.add}
					/>
				</CounterWrapper>
			</View>
		);
	}
}