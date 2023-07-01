import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Dashboard from "./Dashboard";
import DashboardSettings from "./DashboardSettings";
import DashboardGames from "./DashboardGames";
import Game from "./../../../assets/Game.svg"
import Home from "./../../../assets/Home.svg"
import Stats from "./../../../assets/Stats.svg"


export type TabNavigatorParamList = {
    Home: undefined;
    Games: undefined;
    Settings: undefined;
};
const Tab = createBottomTabNavigator<TabNavigatorParamList>();

function DashboardNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false}}
        >
            <Tab.Screen
                name="Home" component={Dashboard}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Stats/>
                    )
                }}
            />
            <Tab.Screen
                name="Games" component={DashboardGames}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Game/>
                    )
                }}
            />
            <Tab.Screen name="Settings" component={DashboardSettings}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Home/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default DashboardNavigation;
