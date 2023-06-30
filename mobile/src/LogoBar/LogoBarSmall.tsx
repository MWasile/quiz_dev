import {Box, HStack, Text, VStack, Flex, Center, Spacer} from "native-base";
import {Avatar} from 'native-base';
import Edit from "../../assets/Edit.svg";

function LogoBarSmall() {
    return (
        <Box
            bg={"#4459A9"}
            justifyContent="center"
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
        >
            <VStack safeAreaTop>
                <HStack display="flex" justifyContent={'center'} alignItems={'center'}>
                    <Box pl={6} pr={6}>
                        <Avatar
                            borderWidth={4}
                            borderColor={"white"}
                            bg="cyan.500"
                            rounded={'full'}
                            size={'xl'}
                            source={{
                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            }}
                        />
                        <Box
                            position={"absolute"}
                            right={0}
                            top={'40%'}
                        >
                            <Edit width={20} height={20}/>
                        </Box>
                    </Box>
                </HStack>
                <HStack display="flex" justifyContent={'center'} alignItems={'center'}>
                    <Box pr={6} pl={6}>
                        <Text
                            fontSize={'xl'}
                            color={'white'}
                            mb={2}
                        >
                            Nickname
                        </Text>
                        <Box
                            position={"absolute"}
                            right={0}
                        >
                            <Edit width={20} height={20}/>
                        </Box>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    );
}

export default LogoBarSmall;
