import {VStack, ScrollView, Text} from "native-base";
import LogoBarSmall from "../../LogoBar/LogoBarSmall";
import ActivityChart from "../ActivityChart/ActivityChart";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import app, {RootStackParamList} from "../../../App";
import Separator from "../Separator/Separator";
import {useEffect, useState} from "react";
import Surface from "../Surface/Surface";
import {apiCall} from "../../helpers/api";


type NavigationProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

type UserElo = {
    elo: number;
    date: string;
};

type UserEloResponse = {
    lastFive: UserElo[];
    now: number;
};

function Dashboard({navigation, route}: NavigationProps) {
    const [userElo, setUserElo] = useState<UserEloResponse | undefined>(undefined);


    useEffect(() => {
        (async () => {
            await getUserEloAPI();
        })();
    }, []);

    async function getUserEloAPI() {
        const data = await apiCall<UserEloResponse>({endpoint: 'ranking'});
        setUserElo(data);
    }


    return (
        <Surface>
            <VStack
                flex={1}>
                <LogoBarSmall/>
                <ScrollView flex={1}
                            horizontal={false}
                >
                    <VStack>
                        <ActivityChart/>
                        <Separator titleText='Ranking' separatorStyle={{mt: 2}}/>
                        <Text>{userElo?.now} XD</Text>


                        <Text>Dashboard</Text>
                        <Text>Dashboard</Text>
                        <Text>Dashboard</Text>
                    </VStack>
                </ScrollView>
            </VStack>
        </Surface>
    );
}

export default Dashboard;
