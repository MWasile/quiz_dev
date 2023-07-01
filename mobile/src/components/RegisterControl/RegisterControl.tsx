import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreateNewAccount from "../CreateNewAccount/CreateNewAccount";
import Dashboard from "../Dashboard/Dashboard";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";


type ProfileData = {
    username: string;
    deviceID: string;
}

type NavigationProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;



function RegisterControl({route, navigation}: NavigationProps) {
    const [profileData, setProfileData] = useState<ProfileData | undefined>(undefined)

    useEffect(() => {
        (async () => {
            const data = await AsyncStorage.getItem('profile');
            if (data) {
                setProfileData(JSON.parse(data));
            }

        })()
    }, []);

    useEffect(() => {

    }, [profileData]);

    return (
        // @ts-ignore
        profileData ? <Dashboard navigation={navigation} route={route}/> : <CreateNewAccount navigation={navigation} route={route}/>
    );
}

export default RegisterControl;
