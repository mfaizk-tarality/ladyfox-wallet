import { colors } from "@/ui/colors";
import React from "react";
import { StyleSheet } from "react-native";
import { SizableText, XStack } from "tamagui";

const tabs = ["My Holding", "History"];

const AssetHoldingTabs = () => {
  return (
    <XStack style={styles.tabContainer}>
      {tabs.map((item, idx) => {
        return (
          <XStack key={idx} style={styles.tab}>
            <SizableText>{item}</SizableText>
          </XStack>
        );
      })}
    </XStack>
  );
};

export default AssetHoldingTabs;
const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary,
    borderStyle: "solid",
  },
  tab: {
    justifyContent: "center",
    flexGrow: 1,
  },
});
