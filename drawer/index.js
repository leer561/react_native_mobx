import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { inject,observer } from 'mobx-react';

import PageTitle from '../common/components/page-title'

@inject(['counterStore']) // 注入对应的store
@observer // 监听当前组件
export default class CustomDrawer extends Component{
	constructor(props) {
		super(props)
		this.store = this.props.counterStore; //通过props来导入访问已注入的store
	}
	render() {
		return (
			<View >
				<PageTitle title="当前计数器的值"/>
				<Text>{this.store.counter}</Text>
			</View>
		);
	}
}