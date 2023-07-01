import {Box, useColorModeValue} from "native-base";
import React from "react";


type SurfaceProps = {
    children: React.PropsWithChildren
}

function Surface({children}: SurfaceProps) {
    const colorScheme = useColorModeValue('primary.99', 'neutral.20');


    return (
        <Box backgroundColor={colorScheme} flex={1}>
            {children}
        </Box>
    );
}

export default Surface;
