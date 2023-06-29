import {SafeAreaView} from "react-native";
import {Text} from "native-base";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";


type NavigationProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

function Dashboard({navigation, route}: NavigationProps) {
    return (
        <SafeAreaView>
            <Text>GameTypeSelection</Text>
        </SafeAreaView>
    );
}

export default Dashboard;
