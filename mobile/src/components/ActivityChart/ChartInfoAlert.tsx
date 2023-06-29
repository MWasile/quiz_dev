import {Alert, Text} from "native-base";
import React, {useEffect} from "react";
import {AlertInfo} from "./ActivityChart";

type ChartInfoAlertProps = {
    data: string;
    count: number;
    setAlertInfo: React.Dispatch<React.SetStateAction<AlertInfo | undefined>>;
}

function ChartInfoAlert({data, count, setAlertInfo}: ChartInfoAlertProps) {
    // TODO: Styling!
    useEffect(() => {
        const timer = setTimeout(() => {
            setAlertInfo(undefined);
        }, 3000);

        return () => clearTimeout(timer);
    }, [setAlertInfo]);

    return (
        <Alert status="info">
            <Text>
                {data} - {count} activities
            </Text>
        </Alert>
    );
}

export default ChartInfoAlert;
