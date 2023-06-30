import React from 'react';
import {NativeBaseProvider} from "native-base";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import CreateNewAccount from "./src/components/CreateNewAccount/CreateNewAccount";
import Login from "./src/components/Login/Login";
import RegisterControl from "./src/components/RegisterControl/RegisterControl";
import DashboardNavigation from "./src/components/Dashboard/DashboardNavigation";
import {theme} from "./src/theme/theme";
import Register from "./src/components/Register/Register";




export type RootStackParamList = {
    RegisterControl: undefined;
    CreateNewAccount: undefined;
    Login: undefined;
    Dashboard: undefined;
    Register: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
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
                        name={'Register'}
                        component={Register}
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
