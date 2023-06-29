import {Box, Button, FormControl, Input, Text} from "native-base";
import LogoBar from "../../LogoBar/LogoBar";

function Login() {
    return (
        <Box
            flex={1}
        >
            <LogoBar/>
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
