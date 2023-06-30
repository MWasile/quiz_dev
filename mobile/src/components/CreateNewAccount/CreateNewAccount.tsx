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
    InputRightAddon, Flex, useTheme, ScrollView
} from "native-base";
import {useEffect, useState} from "react";
import LogoBarBig from "../../LogoBar/LogoBarBig";
import {apiCall} from "../../helpers/api";
import {RootStackParamList} from "../../../App";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CalcPercentageWidth} from "../../helpers/sizing";
import RefreshName from "../../../assets/RefreshName.svg";
import SwitchThemeColor from "../switches/SwitchThemeColor";
import Surface from "../Surface/Surface";
import {ToggleButtonClick} from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";


type NavigationProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

interface NavParams {
    screen: keyof RootStackParamList;
    params?:  { userEmail: string; }
}

function CreateNewAccount({route, navigation}: NavigationProps) {
    const [randomNicknames, setRandomNicknames] = useState<string[]>([]);
    const [nickname, setNickname] = useState<string>('');
    const theme = useTheme();

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

    function handleNavigation(screen: string) {
        // TODO: Investigate TS error
        // @ts-ignore
        navigation.navigate(screen)
    }

    // TODO: Rotation on refresh button? Button animation?
    return (
        <Surface>
            <ScrollView>
                <LogoBarBig/>
                <VStack>
                    <Box>
                        <Text
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
                                    textAlign={'center'}
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
                                color={'#74777F'}
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
                            variant="primary"
                            onTouchStart={() => handleNavigation('Dashboard')}
                            _text={{fontSize: 18}}
                        >
                            Zacznij grać!
                        </Button>
                        <Button
                            variant="secondary"
                            onTouchStart={() => handleNavigation('Login')}
                        >
                            <Text
                                fontSize={18}
                            >Logowanie</Text>
                        </Button>
                        <Button
                            variant="secondary"
                            onTouchStart={() => handleNavigation('RegisterEmail')}
                        >

                            <Text
                                fontSize={18}
                            >Rejestracja</Text>
                        </Button>
                        <Center>
                            <SwitchThemeColor/>
                        </Center>
                    </VStack>
                </VStack>
            </ScrollView>
        </Surface>
    );
}

export default CreateNewAccount;
