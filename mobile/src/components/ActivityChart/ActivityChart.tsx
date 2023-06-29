import {ScrollView} from "native-base";
import {ContributionGraph} from "react-native-chart-kit";
import {getMonthLabel} from "../../helpers/chart";

const commitsData = [
    {date: "2023-01-01", count: 100},
    {date: "2022-12-30", count: 100},
    {date: "2023-01-02", count: 0},
    {date: "2023-12-31", count: 100},
    {date: "2022-12-30", count: 4},

];

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 0, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};


function ActivityChart() {
    // https://github.com/indiespirit/react-native-chart-kit/issues/468
    const handleToolTip: any = {}

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <ContributionGraph
                showOutOfRangeDays={false}
                showMonthLabels={true}
                values={commitsData}
                endDate={new Date("2024-12-31")}
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
