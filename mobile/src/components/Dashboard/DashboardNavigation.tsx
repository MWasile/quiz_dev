import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Dashboard from "./Dashboard";
import DashboardSettings from "./DashboardSettings";
import DashboardGames from "./DashboardGames";


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
            <Tab.Screen name="Home" component={Dashboard}/>
            <Tab.Screen name="Games" component={DashboardGames}/>
            <Tab.Screen name="Settings" component={DashboardSettings}/>
        </Tab.Navigator>
    );
}

export default DashboardNavigation;
