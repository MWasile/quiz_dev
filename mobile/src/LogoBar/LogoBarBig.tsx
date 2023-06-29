import {Box, Text} from "native-base";

function LogoBarBig() {
    return (
        <Box
            bg={'#4459A9'}
            flex={0.4}
            justifyContent={'center'}
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
        >
            <Text
                alignSelf={'center'}
            >
                Logo
            </Text>
        </Box>
    );
}

export default LogoBarBig;
