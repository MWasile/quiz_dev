import {Box, Popover, Pressable} from "native-base";
import {availableBadges} from "./AvailableBadges";


// TODO: implement badges data
type BadgesProps = {
    badgeType: string;
    badgeData?: any;
}


function Badges({badgeType, badgeData}: BadgesProps) {
    const BadgeJSX = availableBadges[badgeType];

    // TODO: implement badges data from backend
    // TODO: add colors to theme, refactor this
    // TODO: Investigate warnings about shadows inside Box
    // TODO: Investigate not working shadows on Android, maybe use elevation or something else

    return (
        <Popover
            placement={"top"}
            trigger={(triggerProps) => {
                return (
                    <Pressable {...triggerProps}>
                        <Box
                            m={2}
                            borderWidth={1}
                            rounded={"2xl"}
                            borderColor={"#E8D7FF"}
                            backgroundColor={'red.50'}
                            bg={'red.50'}
                            p={1}
                            style={{
                                shadowColor: "#8E37FF",
                                shadowOffset: {width: 0, height: 0},
                                shadowOpacity: 0.8,
                                backgroundColor: 'red.50',
                            }}

                        >
                            {BadgeJSX ? <BadgeJSX width={60} height={60}/> : null}
                        </Box>
                    </Pressable>
                );
            }}>

            <Popover.Content
                accessibilityLabel="Badge Content"
                maxWidth={56}
                borderWidth={0}
            >
                <Box
                    p={1}
                    rounded={"2xl"}
                >
                    <Popover.Header
                        bg="#E5D9F5"
                        roundedTop={"2xl"}
                        _text={{
                            textAlign: "center",
                        }}
                        style={{
                            borderBottomWidth: 0,
                            borderColor: "rgba(215, 240, 255, 1)"
                        }}

                    >
                        Zalogowałeś sie! 🏆
                    </Popover.Header>
                    <Popover.Body
                        bg="#E5D9F5"
                        roundedBottom={"2xl"}
                        shadow={0}
                        style={{
                            shadowOpacity: 0,
                        }}
                    >
                        To najważniejsza odznaka 💦
                    </Popover.Body>
                </Box>
            </Popover.Content>
        </Popover>
    );
}

export default Badges;
