import {ScrollView} from "native-base";
import {ContributionGraph} from "react-native-chart-kit";
import {getMonthLabel} from "../../helpers/chart";
import {useEffect, useRef, useState} from "react";

const commitsData = [
    {date: "2023-06-29", count: 100},
    {date: "2023-06-01", count: 100},
];

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


function ActivityChart() {
    const scrollViewRef = useRef<typeof ScrollView>(null);
    const quarterOffset = [0, 240, 375, 787];


    useEffect(() => {
        scrollToCurrentQuarter();
    }, []);

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
    const handleToolTip: any = {}

    return (
        <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <ContributionGraph
                showOutOfRangeDays={false}
                showMonthLabels={true}
                values={commitsData}
                endDate={new Date("2023-12-31")}
                numDays={366}
                width={1190}
                height={200}
                chartConfig={chartConfig}
                getMonthLabel={getMonthLabel}
                tooltipDataAttrs={handleToolTip}
            />
        </ScrollView>
    );
}

export default ActivityChart;
