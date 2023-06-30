import {SafeAreaView} from "react-native";
import {Box, Button, FormControl, Input, ScrollView, Text, VStack} from "native-base";
import Surface from "../Surface/Surface";
import LogoBarBig from "../../LogoBar/LogoBarBig";
import {CalcPercentageWidth} from "../../helpers/sizing";

function RegisterDetails() {
    return (
        <Surface>
            <ScrollView>
                <LogoBarBig/>

                <FormControl
                    alignItems={"center"}
                >
                    <VStack
                        space={8}
                        mt={12}
                        width={CalcPercentageWidth(80)}
                    >
                        <Input
                            placeholder={"Username"}
                            size={'xl'}
                        ></Input>
                        <Input
                            placeholder={"Email"}
                            size={'xl'}
                        ></Input>
                        <Input
                            type={"password"}
                            placeholder={"Password"}
                            size={'xl'}
                        ></Input>
                        <Input
                            type={"password"}
                            placeholder={"Repeat password"}
                            size={'xl'}
                        ></Input>
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

export default RegisterDetails;
