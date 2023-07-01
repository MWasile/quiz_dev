import {ScrollView} from "native-base";
import Badges from "./Badges";


interface BadgesProps{
    badgesToDisplay: string[];
}


function BadgesContainer({badgesToDisplay}: BadgesProps) {

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            rounded={"xl"}
        >
            {
                badgesToDisplay.map((badge, index) => {
                    return <Badges key={index} badgeType={badge}/>
                })
            }
        </ScrollView>
    );
}

export default BadgesContainer;
