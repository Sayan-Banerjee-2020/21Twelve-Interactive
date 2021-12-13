import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/home';
import Details from '../Screens/details';
import CommentDetails from "../Screens/CommentDetails"


const Stack = createStackNavigator();


export default class SplashNavigator extends Component {
    render() {
        return (

            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="home" component={Home} initialRouteName="home" />
                <Stack.Screen name="details" component={Details}/>
                <Stack.Screen name="commentDetails" component={CommentDetails}/>
            </Stack.Navigator>


        )
    }
}