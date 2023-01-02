import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from '../components/Layout/TabBar'

import Stores from "../screens/Stores";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Shared from "../screens/Shared";
import Qrcode from "../screens/Qrcode";
import Signin from "../screens/Signin";
import { createStackNavigator } from "@react-navigation/stack";

const TabBarNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();


const TabNavigator = () => {
    return(
    <TabBarNavigator.Navigator screenOptions={{tabBarHideOnKeyboard:true, headerShown:false}} tabBar={(props) => <TabBar {...props} />}>
        <TabBarNavigator.Screen name="Home" component={Stores} />
        <TabBarNavigator.Screen name="Search" component={Search} />
        <TabBarNavigator.Screen name="Shared" component={Shared} />
        <TabBarNavigator.Screen name="Partiaf" component={Stores} />
        <TabBarNavigator.Screen name="Profile" component={Profile} />
    </TabBarNavigator.Navigator>
    )
}

const LoginNavigator = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
    )
}

const AppNavigator = () => {
    const [user, serUser] = useState(null);
    return (
        <NavigationContainer>
            {user?  <TabNavigator /> : <LoginNavigator /> }
        </NavigationContainer>
    )
}

export default AppNavigator;