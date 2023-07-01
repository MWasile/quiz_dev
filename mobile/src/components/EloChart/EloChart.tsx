import {Box, Button, Center, Popover, Pressable} from "native-base";
import {LineChart} from "react-native-chart-kit";
import {CalcPercentageWidth} from "../../helpers/sizing";
import {useEffect, useState} from "react";


const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 2.0,
    color: (opacity = 1) => `rgba(0, 91, 122, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.0,
    useShadowColorFromDataset: false, // optional,
    paddingTop: 0,
    paddingRight: 0,
    propsForLabels: {
        fontSize: "14",
        fill: "rgba(10, 10, 10, 1)",
        fontWeight: 500,
        padding: 0
    },
    propsForBackgroundLines: {
        strokeDasharray: "", // solid background lines with no dashes
        stroke: "#484847",
        strokeWidth: 0
    },

};


function EloChart({ data }: { data: any }) {
    const [showPopover, setShowPopover] = useState(false);
    const [selectedDataPoint, setSelectedDataPoint] = useState(null);

    useEffect(() => {
        // console.log(data);
    }, [showPopover]);

    const handleDataPointClick = (dataChart) => {
        console.log(dataChart.index);
        console.log(data['datasets']);
        setSelectedDataPoint(dataChart);
        setShowPopover(true);
    };

    return (
        <Box>
            <Popover
                isOpen={showPopover}
                onClose={() => setShowPopover(false)}
                trigger={(triggerProps) => {
                    return (
                        <Pressable {...triggerProps}>
                            <LineChart
                                data={data}
                                withHorizontalLabels={false}
                                withVerticalLabels={false}
                                withVerticalLines={false}
                                withHorizontalLines={false}
                                width={CalcPercentageWidth(100)}
                                height={200}
                                chartConfig={chartConfig}
                                style={{
                                    paddingRight: 6,
                                    marginRight: 52,
                                    paddingTop: 10,
                                    paddingBottom: -35,
                                }}
                                transparent={true}
                                onDataPointClick={handleDataPointClick}
                                bezier
                            />
                        </Pressable>
                    );
                }}
            >
                <Popover.Content maxWidth="56" accessibilityLabel="Point data">
                    <Popover.Arrow />
                    <Popover.Header>Data point information</Popover.Header>
                    <Popover.Body>
                        {/* Tutaj możesz wyświetlić szczegółowe informacje o selectedDataPoint */}
                        {selectedDataPoint && `Value: ${selectedDataPoint.value}`}
                    </Popover.Body>
                </Popover.Content>
            </Popover>
        </Box>
    );
}

export default EloChart;
