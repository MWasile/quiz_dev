import {Box, Button, FormControl, Input, ScrollView, Spacer, Text, VStack} from "native-base";
import Surface from "../Surface/Surface";
import LogoBarBig from "../../LogoBar/LogoBarBig";
import {CalcPercentageWidth} from "../../helpers/sizing";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'RegisterDetails' | 'RegisterEmail'>;

function RegisterDetails({navigation, route}: NavigationProps) {
    const userEmail = route.params?.userEmail;

    return (
        <Surface>
            <ScrollView>
                <LogoBarBig/>

                <FormControl
                    alignItems={"center"}
                >
                    <VStack
                        space={4}
                        width={CalcPercentageWidth(80)}
                    >
                        <Text
                            pt={4}
                            fontSize={12}
                        >
                            Konto zostało utworzone przy pomocy adresu {userEmail} <Spacer />
                            Utwórz swoją nazwę i hasło.
                        </Text>
                        <Box>
                            <FormControl.Label _text={{fontSize: 12}}>
                                Name</FormControl.Label>
                            <Input
                                placeholder="Username"
                                size={'xl'}
                            ></Input>
                        </Box>
                        <Box>
                            <FormControl.Label _text={{fontSize: 12}}>
                                Password</FormControl.Label>
                            <Input
                                placeholder="Password"
                                size={'xl'}
                            ></Input>
                        </Box>
                        <Box>
                            <FormControl.Label _text={{fontSize: 12}}>
                                Repeat password</FormControl.Label>
                            <Input
                                placeholder="Repeat password"
                                size={'xl'}
                            ></Input>
                        </Box>
                        <Button
                            mt={4}
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

export default RegisterDetails;
