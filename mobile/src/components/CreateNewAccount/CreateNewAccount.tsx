import {SafeAreaView} from "react-native";
import {Box, Button, FormControl, Input, Text, VStack} from "native-base";
import {useEffect, useState} from "react";
import LogoBarBig from "../../LogoBar/LogoBarBig";
import {apiCall} from "../../helpers/api";
import {RootStackParamList} from "../../../App";
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type NavigationProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

function CreateNewAccount({ route, navigation }: NavigationProps) {
    const [randomNicknames, setRandomNicknames] = useState<string[]>([]);
    const [nickname, setNickname] = useState<string>('');


    useEffect(() => {
        getRandomNicknamesAPI().catch(
            (err) => {
                // TODO: Handle error
                console.error(err);
            }
        );
    }, [])

    useEffect(() => {
        handleNicknameChange();
    }, [randomNicknames]);

    async function getRandomNicknamesAPI() {
        const data = await apiCall<string[]>({endpoint: 'nicknames'})
        setRandomNicknames(data);
    }

    function handleNicknameChange() {
        const userNick = randomNicknames[Math.floor(Math.random() * randomNicknames.length)];
        setNickname(userNick);
    }

    function getDeviceId() {
        // TODO: Implement
    }

    function handleStartButton(){
        navigation.navigate('Dashboard')
    }

    return (
        <Box
            flex={1}
        >
            <LogoBarBig/>
            <SafeAreaView>
                <VStack>
                    <Text> Witaj! </Text>
                    <Text> Wpisz swoja nazwe i zacznij grać.</Text>
                    <FormControl>
                        <Input>
                            {nickname}
                        </Input>
                    </FormControl>
                    <Box>
                        <Button
                            onTouchStart={handleStartButton}
                        >
                            <Text>Zacznij grać!</Text>
                        </Button>
                        <Button>
                            {/*TODO: Navigate*/}
                            <Text>Zaloguj się!</Text>
                        </Button>
                    </Box>
                </VStack>
            </SafeAreaView>
        </Box>
    );
}

export default CreateNewAccount;
