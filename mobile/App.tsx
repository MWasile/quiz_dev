import React from 'react';
import {NativeBaseProvider} from "native-base";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import CreateNewAccount from "./src/components/CreateNewAccount/CreateNewAccount";
import Login from "./src/components/Login/Login";
import Dashboard from "./src/components/Dashboard/Dashboard";
import RegisterControl from "./src/components/RegisterControl/RegisterControl";
import DashboardNavigation from "./src/components/Dashboard/DashboardNavigation";



export type RootStackParamList = {
    RegisterControl: undefined;
    CreateNewAccount: undefined;
    Login: undefined;
    Dashboard: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name="RegisterControl"
                        component={RegisterControl}
                        options={{contentStyle: {backgroundColor: "transparent"}}}
                    />
                    <Stack.Screen
                        name="CreateNewAccount"
                        component={CreateNewAccount}
                        options={{contentStyle: {backgroundColor: "transparent"}}}
                    />
                    <Stack.Screen
                        name={'Login'}
                        component={Login}
                        options={{contentStyle: {backgroundColor: "transparent"}}}
                    />
                    <Stack.Screen
                        name={'Dashboard'}
                        component={DashboardNavigation}
                        options={{contentStyle: {backgroundColor: "transparent"}}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

export default App;
