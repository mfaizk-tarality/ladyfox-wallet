import { Surface } from "@/component";
import { opacify } from "@/theme/utils";
import { colors } from "@/ui/colors";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { SizableText, XStack, YStack } from "tamagui";
import AssetHoldingTabs from "./component/asset-holding-tab";

const AssetHolding = () => {
  const { symbol } = useLocalSearchParams();
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState("1D");

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: String(symbol)?.toUpperCase(),
      headerBackVisible: false,
    });
  }, [navigation]);

  return (
    <Surface>
      <YStack gap={"$8"}>
        <YStack justifyContent="center" alignItems="center">
          <SizableText textAlign="center" size={"$6"}>
            $1,63,373.27
          </SizableText>
          <SizableText color={"green"}>+$528.71 | +0.32%</SizableText>
        </YStack>
        <XStack>
          <Graph />
        </XStack>
        <XStack width={"100%"} justifyContent={"space-between"}>
          {graphFilterRange?.map((item, idx) => (
            <XStack
              onPress={() => setSelectedFilter(item)}
              key={idx}
              backgroundColor={
                selectedFilter == item ? colors.primary : "transparent"
              }
              height={"$3"}
              width={"$3"}
              justifyContent="center"
              alignItems="center"
              borderRadius={"$10"}
            >
              <SizableText
                color={selectedFilter == item ? colors.white : colors.primary}
              >
                {item}
              </SizableText>
            </XStack>
          ))}
        </XStack>
        <AssetHoldingTabs />
      </YStack>
    </Surface>
  );
};

export default AssetHolding;

const Graph = () => {
  const { width } = useWindowDimensions();

  return (
    <LineChart
      isAnimated
      thickness={2}
      color={opacify(100, colors.primary)}
      noOfSections={3}
      animateOnDataChange
      animationDuration={1000}
      onDataChangeAnimationDuration={300}
      areaChart
      yAxisTextStyle={{ color: "green" }}
      data={latestData}
      startFillColor={colors.primary}
      endFillColor={colors.primary}
      startOpacity={0.3}
      endOpacity={0.1}
      spacing={22}
      backgroundColor={colors.black}
      rulesColor="transparent"
      rulesType="solid"
      hideAxesAndRules
      hideYAxisText
      hideRules
      hideOrigin
      adjustToWidth
      width={width * 0.9}
      initialSpacing={0}
      hideDataPoints
      focusEnabled
      showDataPointLabelOnFocus
    />
  );
};
const latestData = [
  {
    value: 100,
    label: "Hello",
  },
  {
    value: 120,
    label: "Hello",
  },
  {
    value: 210,
  },
  {
    value: 250,
  },
  {
    value: 320,
  },
  {
    value: 310,
  },

  {
    value: 270,
  },
  {
    value: 310,
  },
  {
    value: 70,
  },
  {
    value: 310,
  },
  {
    value: 20,
  },
  {
    value: 120,
  },
  {
    value: 210,
  },
  {
    value: 250,
  },
  {
    value: 120,
  },
  {
    value: 210,
  },
  {
    value: 250,
  },
];

const graphFilterRange = ["1D", "7D", "1M", "6M", "1Y", "MAX"];
