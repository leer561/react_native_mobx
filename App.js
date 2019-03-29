import React from 'react';
import { createAppContainer, createDrawerNavigator} from 'react-navigation';
import { Provider } from "mobx-react";

import store from "./store";
import Tabs from './tab-navigation'
import CustomDrawer from "./drawer";

const RootScreen = createDrawerNavigator(
    {
      MainScreen: {
        screen: Tabs
      }
    },
    {
      drawerPosition: 'right',
      contentComponent: CustomDrawer,
      drawerLockMode:'locked-closed'
    }
)

const AppContainer = createAppContainer(RootScreen)

export default class Root extends React.Component {
    render() {
        return (
            <Provider {...store}>
                <AppContainer />
            </Provider>
        );
    }
}