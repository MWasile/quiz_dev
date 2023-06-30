import {Box, Text, useColorMode} from "native-base";
import {CalcPercentageWidth} from "../../helpers/sizing";
import Sun from '../../../assets/Sun.svg';
import Moon from '../../../assets/Moon.svg';
import {useState} from "react";

function SwitchThemeColor() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const { colorMode, toggleColorMode } = useColorMode();

    function handleSwitchUserTheme() {
        setIsDarkMode(!isDarkMode);
        toggleColorMode();
        console.log(colorMode);
    }


    return (
        <Box
            width={CalcPercentageWidth(18)}
            backgroundColor={'#4459A9'}
            borderRadius={'full'}
            display={'flex'}
            borderColor={'#DDE1FF'}
            borderWidth={2}
            onTouchStart={handleSwitchUserTheme}
        >

            <Box
                p={1}
                alignSelf={isDarkMode ? 'flex-start' : 'flex-end'}
            >
                {
                    isDarkMode ? <Moon /> : <Sun />
                }

            </Box>

        </Box>
    );
}

export default SwitchThemeColor;
