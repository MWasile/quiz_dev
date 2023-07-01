import {Box, Button, Center, FormControl, Input, ScrollView, Text, VStack} from "native-base";
import Surface from "../Surface/Surface";
import LogoBarBig from "../../LogoBar/LogoBarBig";
import {CalcPercentageWidth} from "../../helpers/sizing";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {useState} from "react";

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'RegisterDetails' | 'RegisterEmail'>;

function RegisterEmail({navigation, route}: NavigationProps) {
    const [userEmail, setUserEmail] = useState<string>('');
    const [formErrors, setFormErrors] = useState<{}>({});
    const [showError, setShowError] = useState<boolean>(false);

    function handleRegister() {
        if(!('email' in formErrors) && userEmail !== '') {
            navigation.navigate('RegisterDetails', {userEmail})
        }
    }

    function handleEmailChange(email: string) {
        // TODO: Refactor validation, works but is ugly
        setUserEmail(email);
        const isValid = validateEmail(email);
        if (!isValid && email.length > 8) {
            setShowError(true);
        } else {
            setShowError(false);
        }

    }

    function validateEmail(email: string) {
        let re = /\S+@\S+\.\S+/;
        let result = re.test(email);
        if (!result) {
            setFormErrors({...formErrors, email: 'Invalid email address'});
        } else {
            setFormErrors({});
        }
        return result;
    }

    return (
        <Surface>
            <ScrollView>
                <LogoBarBig/>
                <FormControl
                    alignItems={"center"}
                    isInvalid={'email' in formErrors}
                    isRequired
                >
                    <VStack
                        space={8}
                        width={CalcPercentageWidth(80)}
                    >
                        <Text
                            mt={2}
                            fontSize={12}
                        >
                            Podaj swój adres e-mail aby zarejestrować.
                        </Text>
                        <Box>
                            <Input
                                placeholder="Email"
                                size={'xl'}
                                onChangeText={handleEmailChange}
                            ></Input>

                            {showError &&
                                <Center>
                                    <FormControl.ErrorMessage>Niepoprawny adres e-mail.</FormControl.ErrorMessage>
                                </Center>
                            }

                        </Box>
                        <Button
                            variant={"secondary"}
                            width={CalcPercentageWidth(60)}
                            alignSelf={"center"}
                            onPress={handleRegister}
                        >
                            Zaloguj się!
                        </Button>
                    </VStack>
                </FormControl>
            </ScrollView>
        </Surface>
    );
}

export default RegisterEmail;
