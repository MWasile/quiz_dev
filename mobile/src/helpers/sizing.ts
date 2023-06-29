import {Dimensions} from "react-native";

export function CalcPercentageWidth(width: number): number {
    const screenWidth = Dimensions.get('window').width;
    return (width / 100) * screenWidth;
}



