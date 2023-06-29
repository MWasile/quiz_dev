import { Box, HStack, Spacer, Text } from "native-base";

function LogoBarSmall() {
    return (
        <Box
            bg={"#4459A9"}
            flex={0.15}
            justifyContent="center"
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
        >
            <HStack justifyContent="space-between" alignItems="center">
                <HStack flex={1} justifyContent="center">
                    <Text>Logo</Text>
                </HStack>
                <Text alignSelf="flex-end">Avatar</Text>
            </HStack>
        </Box>
    );
}

export default LogoBarSmall;
