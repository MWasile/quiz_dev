import {Box, Button, FormControl, Input, ScrollView, Text, VStack} from "native-base";
import LogoBarBig from "../../LogoBar/LogoBarBig";
import {CalcPercentageWidth} from "../../helpers/sizing";
import {useState} from "react";
import SwitchThemeColor from "../switches/SwitchThemeColor";
import Surface from "../Surface/Surface";


function Login() {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // TODO: Implement login logic

    return (
        <Surface>
            <ScrollView>
                <LogoBarBig/>

                <FormControl
                    alignItems={"center"}
                >
                    <VStack
                        space={6}
                        mt={12}
                        width={CalcPercentageWidth(80)}
                    >
                        <Input
                            placeholder={"Email"}
                            size={'xl'}
                        >

                        </Input>
                        <Box>
                            <Input
                                type={"password"}
                                placeholder={"Password"}
                                size={'xl'}
                            ></Input>
                            <Text
                                alignSelf={"flex-end"}
                                fontSize={12}
                                color={"#74777F"}
                            >
                                Zapomniałem hasła
                            </Text>
                        </Box>
                        <Button
                            variant={"primary"}
                            width={CalcPercentageWidth(60)}
                            alignSelf={"center"}
                        >
                            Zaloguj się!
                        </Button>
                    </VStack>
                </FormControl>
            </ScrollView>
        </Surface>
    );
}

export default Login;
