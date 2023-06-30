import {Box, Text, Image} from "native-base";
import {ImagesAssets} from "../../assets/imageAssets";
import SwitchThemeColor from "../components/switches/SwitchThemeColor";
import {SafeAreaView} from "react-native";

function LogoBarBig() {
    return (
        <Box
            bg={'#4459A9'}
            justifyContent={'center'}
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
            style={{
                shadowColor: "#2A4190",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.45,
                shadowRadius: 16.00,
            }}
        >
            <Box
                mt={8}
            >
                <Image source={ImagesAssets.logo} alt={"App Logo"} alignSelf={"center"}/>
                <Text alignSelf={"center"} fontSize={'2xl'} color={'white'} pb={10}> Dev Quiz </Text>
            </Box>
        </Box>
    );
}

export default LogoBarBig;
