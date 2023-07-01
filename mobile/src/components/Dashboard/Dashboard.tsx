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
import EloChart from "../EloChart/EloChart";
import BadgesContainer from "../../Badges/BadgesContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
    const [userElo, setUserElo] = useState<number>(0);
    const [chartData, setChartData] = useState(undefined);

    useEffect(() => {
        (async () => {
            await getRankingChartDataFromStorage();
            await getUserEloAPI();
        })();
    }, []);


    async function getUserEloAPI() {
        const data = await AsyncStorage.getItem('elo');

        if (data !== null) {
            const eloData = JSON.parse(data);
            setUserElo(eloData);
        }
    }

    async function getRankingChartDataFromStorage() {
        const dataChart = await AsyncStorage.getItem('lastFiveGames');

        // TODO: TYPE THIS AND NEED TO BE REFACTORED

        if (dataChart !== null) {
            const data = JSON.parse(dataChart);
            const datasets = data.map((value) => value.elo);
            setChartData({datasets: [{data: datasets}]})
        }

    }


    return (
        <Surface>
            <VStack
                flex={1}>
                <LogoBarSmall/>
                <ScrollView flex={1} horizontal={false}>
                    <Box mt={4}>
                        <ActivityChart/>
                    </Box>
                    <VStack
                        width={CalcPercentageWidth(80)}
                        alignSelf={'center'}
                    >

                        <Separator titleText='Ranking' separatorStyle={{mt: 4, mb: 4}}/>
                        <Text
                            fontSize={'xl'}
                            fontWeight={'bold'}
                            color={'primary.30'}
                        >{userElo} ptk. ELO</Text>

                        {chartData !== undefined && (
                            <EloChart data={chartData}/>
                        )}


                        <Separator titleText='Badges' separatorStyle={{mt: 4, mb: 4}}/>
                        <BadgesContainer
                            badgesToDisplay={['SilverBadgeOne', 'GoldBadgeOne', 'SilverBadgeOne', 'SilverBadgeOne', 'SilverBadgeOne', 'SilverBadgeOne']}
                        />

                    </VStack>
                </ScrollView>
            </VStack>
        </Surface>
    );
}

export default Dashboard;
