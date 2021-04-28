import React, {useEffect} from "react";
import * as Notifications from "expo-notifications";
import {NotificationBehavior} from "expo-notifications";
import {Text, View} from "react-native";

export const Landing = (props: any) => {
    useEffect(() => {
        Notifications.setNotificationHandler({
            handleNotification: async (_) => {
                return {
                    shouldShowAlert: true
                } as NotificationBehavior;
            }
        })
        Notifications.getPermissionsAsync()
            .then(statusObject => {
                console.log(statusObject);
                return Notifications.requestPermissionsAsync();
            })
            .then(statusObject => {
                console.log(statusObject);
                return statusObject;
            })
            .catch(error => {
                console.log('error: ', error);
            });
        return () => {
            console.log('clean up');
        };
    }, []);
    return (
        <View>
            <Text>Landing Page</Text>
        </View>
    )
}