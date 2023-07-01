import React from 'react';
import {NativeBaseProvider} from "native-base";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import CreateNewAccount from "./src/components/CreateNewAccount/CreateNewAccount";
import Login from "./src/components/Login/Login";
import RegisterControl from "./src/components/RegisterControl/RegisterControl";
import DashboardNavigation from "./src/components/Dashboard/DashboardNavigation";
import {theme} from "./src/theme/theme";
import RegisterEmail from "./src/components/Register/RegisterEmail";
import RegisterDetails from "./src/components/Register/RegisterDetails";
import InitialLoadDataFromApi from "./src/components/InitialLoadDataFromApi/InitialLoadDataFromApi";
import {LogBox} from "react-native";

LogBox.ignoreAllLogs();

export type RootStackParamList = {
    InitialLoadDataFromApi: undefined;
    RegisterControl: undefined;
    CreateNewAccount: undefined;
    Login: undefined;
    Dashboard: undefined;
    RegisterEmail: undefined;
    RegisterDetails: { userEmail: string };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name="InitialLoadDataFromApi"
                        component={InitialLoadDataFromApi}
                    />
                    <Stack.Screen
                        name="RegisterControl"
                        component={RegisterControl}
                    />
                    <Stack.Screen
                        name="CreateNewAccount"
                        component={CreateNewAccount}
                    />
                    <Stack.Screen
                        name={'Login'}
                        component={Login}
                    />
                    <Stack.Screen
                        name={'RegisterEmail'}
                        component={RegisterEmail}
                    />
                    <Stack.Screen
                        name={'RegisterDetails'}
                        component={RegisterDetails}
                    />
                    <Stack.Screen
                        name={'Dashboard'}
                        component={DashboardNavigation}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

export default App;
