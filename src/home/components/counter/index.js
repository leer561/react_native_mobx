import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import { inject,observer } from 'mobx-react';

import PageTitle from '../../../common/components/page-title'
import CustomButton from '../../../common/components/button'
import {CounterWrapper,CounterNumber} from "./style";

@inject(['counterStore']) // 注入对应的store
@observer // 监听当前组件
export default class Counter extends Component{
	constructor(props) {
		super(props)
		this.store = this.props.counterStore; //通过props来导入访问已注入的store
	}
	render() {
		const { counter } = this.store;
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
						onPress={this.store.reduce}
					/>
					<CounterNumber>{counter}</CounterNumber>
					<CustomButton
						icon={
							<Icon name="plus"
								  size={15}
								  color="white"/>
						}
						containerStyle={{flex:1}}
						onPress={this.store.add}
					/>
				</CounterWrapper>
			</View>
		);
	}
}