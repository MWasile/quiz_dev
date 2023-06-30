import {Box, ScrollView, Text} from "native-base";
import SilverOne from "./../../assets/SilverBadgeOne.svg";
import SilverTwo from "./../../assets/SilverBadgeTwo.svg";
import SilverThree from "./../../assets/SilverBadgeThree.svg";


interface BadgesProps{
    badgesToDisplay?: string[];
}


function BadgesContainer({badgesToDisplay}: BadgesProps) {
    const badges = {
        "silverOne": <SilverOne />,
        "silverTwo": <SilverTwo />,
        "silverThree": <SilverThree />,
    }

    return (
        <ScrollView
            horizontal={true}
        >
            {
                badgesToDisplay?.map((badge, index) => {
                    return badges[badge];
                })
            }
        </ScrollView>
    );
}

export default BadgesContainer;
