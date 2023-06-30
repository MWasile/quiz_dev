import {VStack, ScrollView, Text, Box} from "native-base";
import LogoBarSmall from "../../LogoBar/LogoBarSmall";
import ActivityChart from "../ActivityChart/ActivityChart";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import app, {RootStackParamList} from "../../../App";
import Separator from "../Separator/Separator";
import {useEffect, useState} from "react";
import Surface from "../Surface/Surface";
import {apiCall} from "../../helpers/api";
import {CalcPercentageWidth} from "../../helpers/sizing";
import {LineChart} from "react-native-chart-kit";
import EloChart from "../EloChart/EloChart";
import BadgesContainer from "../../Badges/BadgesContainer";


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
    const [chartData, setChartData] = useState(undefined);

    useEffect(() => {
        (async () => {
            await getUserEloAPI();
        })();
    }, []);

    useEffect(() => {
        getRankingChartData(userElo);
    }, [userElo]);

    async function getUserEloAPI() {
        const data = await apiCall<UserEloResponse>({endpoint: 'ranking'});
        setUserElo(data);
    }

    function getRankingChartData(values: UserElo[]) {
        if (values !== undefined) {

            const datasets = values.lastFive.map((value) => value.elo);
            setChartData({datasets: [{data: datasets}]});
        }

    }


    return (
        <Surface>
            <VStack
                flex={1}>
                <LogoBarSmall/>
                <ScrollView flex={1} horizontal={false}>
                    <ActivityChart/>
                    <VStack
                        width={CalcPercentageWidth(80)}
                        alignSelf={'center'}
                    >

                        <Separator titleText='Ranking' separatorStyle={{mt: 4}}/>
                        <Text
                            fontSize={'xl'}
                            fontWeight={'bold'}
                            color={'primary.30'}
                        >{userElo?.now} ptk. ELO</Text>

                        {chartData !== undefined && (
                            <EloChart data={chartData}/>
                        )}


                        <Separator titleText='Badges' separatorStyle={{mt: 4}}/>
                        <BadgesContainer
                            badgesToDisplay={['silverThree', 'silverTwo', 'silverOne','silverThree', 'silverTwo', 'silverOne']}
                        />

                    </VStack>
                </ScrollView>
            </VStack>
        </Surface>
    );
}

export default Dashboard;
