import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {Landing} from "../screens/landing";
import React from "react";

export const AppNavigator = (props: any) => {
    // const isAuth =

    const MyStack = createStackNavigator();

    return (
        <NavigationContainer>
            <MyStack.Navigator>
                <MyStack.Screen name={'landing'} component={Landing}/>
            </MyStack.Navigator>
        </NavigationContainer>
    );
}