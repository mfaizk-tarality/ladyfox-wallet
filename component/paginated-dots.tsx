import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "tamagui";

const PaginatedDots = ({
  doteLength,
  activeDotsIndex,
  withBack = false,
}: {
  doteLength: number;
  activeDotsIndex?: number;
  withBack?: boolean;
}) => {
  if (withBack) {
    return (
      <View flexDirection="row">
        <ChevronLeft color={"#fff"} onPress={() => router.back()} />
        <View style={styles.dotContainer}>
          {Array(doteLength)
            ?.fill("")
            ?.map((_, idx) => (
              <View
                key={idx}
                style={
                  activeDotsIndex == idx ? styles.filledDots : styles.emptyDots
                }
              />
            ))}
        </View>
      </View>
    );
  }
  return (
    <View style={styles.dotContainer}>
      {Array(doteLength)
        ?.fill("")
        ?.map((_, idx) => (
          <View
            key={idx}
            style={
              activeDotsIndex == idx ? styles.filledDots : styles.emptyDots
            }
          ></View>
        ))}
    </View>
  );
};

export default PaginatedDots;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    marginRight: 10,
  },
  emptyDots: {
    backgroundColor: "#fff",
    opacity: 0.5,
    height: 8,
    width: 8,
    borderRadius: "50%",
  },
  filledDots: {
    backgroundColor: "#fff",
    height: 8,
    width: 8,
    borderRadius: "50%",
  },
});
