import {Box, Button, FormControl, Input, Text} from "native-base";
import LogoBarBig from "../../LogoBar/LogoBarBig";

function Login() {
    return (
        <Box
            flex={1}
        >
            <LogoBarBig/>
            <Text>
                Login
            </Text>

            <Box>
                <FormControl>
                    <Input></Input>
                    <Input></Input>
                </FormControl>
                <Button>
                    <Text>
                        Zaloguj się!
                    </Text>
                </Button>
            </Box>

        </Box>
    );
}

export default Login;
