import React from 'react';
import {createStackNavigator} from "react-navigation";
import Home from "./home";
import Icon from 'react-native-vector-icons/dist/Feather';

const HomeStack = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: ({navigation}) => ({
				title: '首页',
			}),
		}
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			headerStyle: {
				backgroundColor: '#2e4770',
				fontWeight: '300'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				textAlign: 'center',
				flex: 1
			},
			headerRightContainerStyle: {
				paddingRight: 10,
				fontWeight: '300'
			},
			headerRight: (
				<Icon
					onPress={() => {
						navigation.openDrawer()
					}}
					name='align-left'
					size={24}
					color='#F5FBFF' light/>
			),
			headerLeftContainerStyle: {
				paddingLeft: 10,
				fontWeight: '300'
			},
			headerLeft: (
				<Icon
					onPress={() => alert('响应搜索')}
					name='search'
					size={24}
					color='#F5FBFF' light/>
			),
		})
	}
);

export default HomeStack