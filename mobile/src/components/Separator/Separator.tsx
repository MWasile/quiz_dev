import {Box, Text} from "native-base";
import {CalcPercentageWidth} from "../../helpers/sizing";

type StyleProps = {
    m?: number;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
};

type SeparatorProps = {
    titleText: string;
    separatorStyle?: StyleProps;
}

function Separator({titleText, separatorStyle}: SeparatorProps) {
    return (
        <Box
            width={CalcPercentageWidth(80)}
            alignSelf={'center'}
            {...separatorStyle}
        >
            <Text
                bold={true}
            >
                {titleText}
            </Text>
            <Box
                height={'2px'}
                backgroundColor={'tertiary.80'}
            />
        </Box>
    );
}

export default Separator;
