import React, { useEffect, useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet, Animated, Image} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const BottomTabView = () => {


    const Posts = () => {
        return (
            <View>
                <Text>Posts</Text>
            </View>
         )
    }
    const Events = () => {
        return (
            <View>
                <Text>Events</Text>
            </View>
         )
    }
    const Tags = () => {
        return (
            <View>
                <Text>Tags</Text>
            </View>
         )
    }
  return (
    <Tab.Navigator
        // screenOptions={(props) => ({
        //     tabBarShowLanel: false,
        //     tabBarIndicatorStyle: {
        //         bacgroundColor:'black',
        //         height: 1.5
        //     },
        // tabBarIcon: ({focused, color}) => {
        //     let iconName;
        //     if(props.route.name == "Posts"){
        //         iconName = focused? 'ios-app-sharp' : 'ios-apps-sharp';
        //         color = focused? 'black' : 'gray'
        //     }
        // }
        // })}
    >
        <Tab.Screen name="Posts" component={Posts} />
         <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,

    },
    tabItem: {
        width: 60
    },
    tabBarText: {
        fonstSize: 10,
        fontWeight: '700'
    },
    actionsButton: {
        width: 40,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 21,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dots: {
        display: 'flex',
        flexDirection: 'row',
    },
    dot: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        height:5,
        width: 5,
        borderRadius: 50,
        marginLeft: 4
    }
})

export default BottomTabView;