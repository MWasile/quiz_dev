import SilverBadgeOne from "./../../assets/SilverBadgeOne.svg";
import SilverBadgeTwo from "./../../assets/SilverBadgeTwo.svg";
import SilverBadgeThree from "./../../assets/SilverBadgeThree.svg";
import GoldBadgeOne from "./../../assets/GoldBadgeOne.svg";
import GoldBadgeTwo from "./../../assets/GoldBadgeTwo.svg";
import GoldBadgeThree from "./../../assets/GoldBadgeThree.svg";


import {SvgProps} from "react-native-svg";
import {FC} from "react";

type BadgeTypes = {
    [key: string]: FC<SvgProps>;
}

export const availableBadges: BadgeTypes = {
    SilverBadgeOne,
    SilverBadgeTwo,
    SilverBadgeThree,
    GoldBadgeOne,
    GoldBadgeTwo,
    GoldBadgeThree,
};
