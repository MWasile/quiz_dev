import {Box, Text, Image} from "native-base";
import {ImagesAssets} from "../../assets/imageAssets";
import SwitchThemeColor from "../components/switches/SwitchThemeColor";
import {SafeAreaView} from "react-native";

function LogoBarBig({flex}: { flex: number }) {
    return (
        <Box
            bg={'#4459A9'}
            flex={flex}
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
            <Image source={ImagesAssets.logo} alt={"App Logo"} alignSelf={"center"}/>
            <Text alignSelf={"center"} fontSize={'2xl'} color={'white'}> Dev Quiz </Text>
        </Box>
    );
}

export default LogoBarBig;
