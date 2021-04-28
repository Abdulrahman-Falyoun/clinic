import {Platform} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {Operations} from "../screens/operations";
import React from "react";


const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ClinicStackNavigator = createStackNavigator();

export const ClinicNavigator = () => {
    return (
        <ClinicStackNavigator.Navigator screenOptions={{}}>
            <ClinicStackNavigator.Screen
                name={'operations'}
                component={Operations}
                options={defaultNavOptions}
            />
        </ClinicStackNavigator.Navigator>
    )
}