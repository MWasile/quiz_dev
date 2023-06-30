import {SafeAreaView} from "react-native";
import {
    Box,
    Button,
    FormControl,
    Icon,
    Input,
    Text,
    VStack,
    createIcon,
    Image,
    Center,
    InputGroup,
    InputRightAddon, Flex
} from "native-base";
import {useEffect, useState} from "react";
import LogoBarBig from "../../LogoBar/LogoBarBig";
import {apiCall} from "../../helpers/api";
import {RootStackParamList} from "../../../App";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CalcPercentageWidth} from "../../helpers/sizing";
import RefreshName from "../../../assets/RefreshName.svg";


type NavigationProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

function CreateNewAccount({route, navigation}: NavigationProps) {
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

    function handleStartButton() {
        navigation.navigate('Dashboard')
    }

    // TODO: Rotation on refresh button? Button animation?
    return (
        <Box
            flex={1}
            backgroundColor={'#FFFBFF'}
        >
            <LogoBarBig flex={0.7}/>
            <SafeAreaView>
                <VStack
                >
                    <Box>
                        <Text
                            color={'black'}
                            fontSize={24}
                            mt={18}
                            ml={8}
                        > Witaj!
                        </Text>
                        <Text
                            fontSize={16}
                            ml={8}

                        > Wpisz swoja nazwe i zacznij grać.</Text>
                        <FormControl>
                            <InputGroup
                                justifyContent={'center'}
                            >
                                <Input
                                    mt={6}
                                    alignSelf={'center'}
                                    width={CalcPercentageWidth(80)}
                                    size={'xl'}
                                    backgroundColor={'#DDE1FF'}
                                    borderColor={'#DDE1FF'}
                                    textAlign={'center'}
                                    _focus={{
                                        borderColor: '#DDE1FF',
                                    }}
                                    InputRightElement={
                                    <Box
                                        alignSelf={'center'}
                                        position={'absolute'}
                                        onTouchStart={handleNicknameChange}
                                        right={14}
                                    >
                                        <RefreshName width={25} height={25}/>
                                    </Box>
                                    }
                                >
                                    {nickname}
                                </Input>
                            </InputGroup>
                            <Text
                                ml={10}
                                fontSize={10}
                            >
                                Nazwę - zawsze możesz zmienić
                            </Text>
                        </FormControl>
                    </Box>
                    <VStack
                        mt={12}
                        space={10}
                        width={CalcPercentageWidth(50)}
                        alignSelf={'center'}
                    >
                        <Button
                            rounded={'full'}
                            backgroundColor={'#4459A9'}
                            onTouchStart={handleStartButton}
                        >
                            <Text
                                color={'white'}
                                fontSize={18}
                            >Zacznij grać!</Text>
                        </Button>
                        <Button
                            rounded={'full'}
                            backgroundColor={'#DDE1FF'}
                        >
                            {/*TODO: Navigate*/}
                            <Text
                                fontSize={18}
                            >Logowanie</Text>
                        </Button>
                        <Button
                            rounded={'full'}
                            backgroundColor={'#DDE1FF'}
                        >
                            {/*TODO: Navigate*/}
                            <Text
                                fontSize={18}
                            >Rejestracja</Text>
                        </Button>
                    </VStack>
                </VStack>
            </SafeAreaView>
        </Box>
    );
}

export default CreateNewAccount;
