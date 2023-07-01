import LogoBarBig from "../../LogoBar/LogoBarBig";
import Surface from "../Surface/Surface";
import {Box, Container, Heading, HStack, Progress, Spinner, Text} from "native-base";
import {SafeAreaView} from "react-native";
import {useContext, useEffect, useState} from "react";
import {apiCall} from "../../helpers/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

function InitialLoadDataFromApi({navigation}) {
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
        const data = await apiCall({endpoint: 'initial'});
        setProgress(prevState => prevState + 25);
        await setEloInLocalStorage(data.ranking.now);
        await setActivityInLocalStorage(data.activity);
        await setLastFiveGamesInLocalStorage(data.ranking.lastFive);
    }

    async function setEloInLocalStorage(value: string) {
        await AsyncStorage.setItem('elo', JSON.stringify(value));
        await setProgress(prevState => prevState + 25);
    }

    async function setActivityInLocalStorage(value: string) {
        await AsyncStorage.setItem('activity', JSON.stringify(value));
        await setProgress(prevState => prevState + 25);
    }

    async function setLastFiveGamesInLocalStorage(value: string) {
        await AsyncStorage.setItem('lastFiveGames', JSON.stringify(value));
        await setProgress(prevState => prevState + 25);
    }


    function consoleLogProgress() {
        // console.log(progress);
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
