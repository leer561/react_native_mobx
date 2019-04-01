import React from 'react';
import {createStackNavigator} from "react-navigation";
import Others from "./others";

const OthersStack = createStackNavigator(
	{
		Others: {
			screen: Others,
			navigationOptions: ({navigation}) => ({
				title: '其他',
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
			}

		})
	}
);

export default OthersStack