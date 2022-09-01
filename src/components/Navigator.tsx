import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import HomeScreen from "./Pages/HomeScreen";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#FFFDF7',
                },
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
