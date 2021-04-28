import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {Landing} from "../screens/landing";
import React from "react";
import {ClinicNavigator} from "./clinic-navigator";

export const AppNavigator = (props: any) => {
    // const isAuth =
    // const RootStack = createStackNavigator();

    return (
        <NavigationContainer>
            {/*<RootStack.Navigator>*/}
            {/*    <RootStack.Screen name={'landing'} component={Landing}/>*/}
            {/*</RootStack.Navigator>*/}
            <ClinicNavigator />
        </NavigationContainer>
    );
}