import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/dist/Feather';

import HomeStack from './home'
import OthersStack from "./others";

const Tabs = createBottomTabNavigator(
	{
		Home: {
			screen: HomeStack,
			navigationOptions: {
				tabBarLabel: () => (
					<View/>
				)
			}
		},
		Others: {
			screen: OthersStack,
			navigationOptions: {
				tabBarLabel: '其他'
			}
		}
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({focused, tintColor}) => {
				const {routeName} = navigation.state;
				let size = 24
				let icon;
				switch (routeName) {
					case 'Home':
						icon = `home`;
						size = 30;
						break;
					case 'Others':
						icon = `users`;
						break;
				}

				return <Icon
					name={icon}
					size={size}
					color={tintColor}/>;
			},
		}),
		tabBarOptions: {
			activeTintColor: '#2c456e',
			inactiveTintColor: '#888888',
			showIcon: true
		}
	}
);

export default Tabs