import {ScrollView, Box} from "native-base";
import {ContributionGraph} from "react-native-chart-kit";
import {getMonthLabel} from "../../helpers/chart";
import React, {useEffect, useRef, useState} from "react";
import {apiCall} from "../../helpers/api";
import ChartInfoAlert from "./ChartInfoAlert";


const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 0,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

interface ChartData {
    date: string;
    count: number;
}

export interface AlertInfo {
    data: string;
    count: number;
    render: boolean;
}

function ActivityChart() {
    const scrollViewRef = useRef<typeof ScrollView>(null);
    const [chartData, setChartData] = useState<ChartData[]>([]);
    const quarterOffset = [0, 240, 375, 787];
    const [alertInfo, setAlertInfo] = useState<AlertInfo | undefined>(undefined);

    useEffect(() => {
        (async () => {
            await getChartData();
        })();
        scrollToCurrentQuarter();
    }, []);


    function handleDayPress(value: ChartData) {
        if (value.count === 0) return;

        setAlertInfo({
            data: value.date,
            count: value.count,
            render: true
        });
    }

    async function getChartData() {
        // TODO: abort controller
        const data = await apiCall<ChartData[]>({endpoint: 'activity'});
        setChartData(data);
    }

    function getCurrentQuarter() {
        // returns 0, 1, 2, 3
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        return Math.ceil(currentMonth / 3) - 1;
    };
    const scrollToCurrentQuarter = () => {
        const currentQuarter = getCurrentQuarter();
        const scrollOffset = quarterOffset[currentQuarter];
        // @ts-ignore
        // TODO: fix this
        scrollViewRef.current?.scrollTo({x: scrollOffset});
    };

    // https://github.com/indiespirit/react-native-chart-kit/issues/468
    // TODO: No documentation on how to use this, read the source code
    const handleToolTip: any = {}

    return (
        <Box>
            {
                alertInfo && alertInfo.render && (
                    <ChartInfoAlert data={alertInfo?.data} count={alertInfo?.count} setAlertInfo={setAlertInfo}/>
                )
            }
            <ScrollView
                ref={scrollViewRef}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <ContributionGraph
                    style={{
                        marginLeft: -25,
                        marginTop: -10,
                        marginBottom: -4
                    }}
                    showOutOfRangeDays={false}
                    showMonthLabels={true}
                    values={chartData}
                    endDate={new Date("2023-12-31")}
                    numDays={366}
                    width={1190}
                    height={200}
                    chartConfig={chartConfig}
                    getMonthLabel={getMonthLabel}
                    tooltipDataAttrs={handleToolTip}
                    onDayPress={handleDayPress}
                />
            </ScrollView>
        </Box>
    );
}

export default ActivityChart;
