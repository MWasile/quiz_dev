import LogoBarBig from "../../LogoBar/LogoBarBig";
import Surface from "../Surface/Surface";
import {Box, Heading, Progress} from "native-base";
import {useEffect, useState} from "react";
import {apiCall} from "../../helpers/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";

interface Activity {
    count: number;
    date: string;
}

interface RankingEntry {
    elo: number;
    date: string;
}

interface Ranking {
    lastFive: RankingEntry[];
    now: number;
}

interface Data {
    activity: Activity[];
    nicknames: string[];
    ranking: Ranking;
}
type NavigationProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

function InitialLoadDataFromApi({navigation}: NavigationProps) {
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        if (progress === 100) {
            navigation.navigate('RegisterControl');
        }
    }, [progress]);

    useEffect(() => {
        loadInitialData();
    }, []);


    async function loadInitialData() {
        const data = await apiCall<Data>({endpoint: 'initial'});
        setProgress(prevState => prevState + 25);
        await setEloInLocalStorage(data.ranking.now);
        await setActivityInLocalStorage(data.activity);
        await setLastFiveGamesInLocalStorage(data.ranking.lastFive);
    }

    async function setEloInLocalStorage(value: number) {
        await AsyncStorage.setItem('elo', JSON.stringify(value));
        await setProgress(prevState => prevState + 25);
    }

    async function setActivityInLocalStorage(value: Activity[]) {
        await AsyncStorage.setItem('activity', JSON.stringify(value));
        await setProgress(prevState => prevState + 25);
    }

    async function setLastFiveGamesInLocalStorage(value: RankingEntry[]) {
        await AsyncStorage.setItem('lastFiveGames', JSON.stringify(value));
        await setProgress(prevState => prevState + 25);
    }


    return (
        <Surface>
            <LogoBarBig/>
            <Box
                flex={0.7}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Heading
                    color="primary.50"
                    fontSize="md"
                >
                    Loading...
                </Heading>
                <Progress
                    colorScheme="rgba(19, 145, 194, 1)"
                    bg="primary.80"
                    width={"75%"}
                    size="xl"
                    value={progress}
                />
            </Box>
        </Surface>
    );
}

export default InitialLoadDataFromApi;
