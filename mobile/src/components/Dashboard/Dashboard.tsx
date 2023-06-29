import {VStack, ScrollView, Text} from "native-base";
import LogoBarSmall from "../../LogoBar/LogoBarSmall";
import ActivityChart from "../ActivityChart/ActivityChart";


function Dashboard() {
    return (
        <VStack
            flex={1}>
            <LogoBarSmall/>
            <ScrollView flex={1}
                        horizontal={false}
            >
                <VStack>
                    <ActivityChart/>
                    <Text>Dashboard</Text>
                    <Text>Dashboard</Text>
                    <Text>Dashboard</Text>
                    <Text>Dashboard</Text>
                    <Text>Dashboard</Text>
                </VStack>
            </ScrollView>
        </VStack>
    );
}

export default Dashboard;
