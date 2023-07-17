import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../constants";
import Splash from "../screens/auth/Splash";
import Login from "../screens/auth/Login";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Verification from "../screens/auth/Verification"
import ResetPassword from "../screens/auth/ResetPassword";
import Home from "../screens/home/Home";
import orderDetails from "../screens/orders/orderDetails";
import MapsView from "../screens/home/mapsView";
import chat from "../screens/chat/chat";

export default function MainNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={SCREENS.Splash}
                screenOptions={{ headerShown: false,
                    presentation: 'card',
                    gestureEnabled:false }}>

                <Stack.Screen name={SCREENS.Splash} component={Splash} />
                <Stack.Screen name={SCREENS.Login} component={Login} />
                <Stack.Screen name={SCREENS.ForgetPassword} component={ForgotPassword} />
                <Stack.Screen name={SCREENS.Verification} component={Verification} />
                <Stack.Screen name={SCREENS.ResetPassword} component={ResetPassword} />
                <Stack.Screen name={SCREENS.Home} component={Home} />
                <Stack.Screen name={SCREENS.orderDetails} component={orderDetails} />
                <Stack.Screen name={SCREENS.mapsView} component={MapsView} />
                <Stack.Screen name={SCREENS.chat} component={chat} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}