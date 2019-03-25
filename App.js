import React from 'react';
import { createAppContainer, createDrawerNavigator} from 'react-navigation';

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

export default createAppContainer(RootScreen)