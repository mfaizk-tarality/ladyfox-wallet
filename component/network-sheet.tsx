import { useUIStore } from "@/store/ui-store";
import { colors } from "@/ui/colors";
import { router } from "expo-router";
import { EllipsisVertical, Search } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, SizableText, View, XStack, YStack } from "tamagui";
import { CustomScrollView, StyledButton, StyledInput } from ".";
import { CommonSheet } from "./common-sheet";

const NetworkSheet = () => {
  const { networkModal, setNetworkModal } = useUIStore();
  return (
    <CommonSheet
      open={networkModal}
      setOpen={setNetworkModal}
      children={
        <YStack width={"100%"} gap={"$2"}>
          <SizableText>Select Network</SizableText>
          <XStack position="relative">
            <Search
              color={colors.white}
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
              }}
            />
            <StyledInput
              placeholder="Search"
              flexGrow={1}
              paddingLeft={"$8"}
              placeholderTextColor={colors.white}
            />
          </XStack>
          <YStack maxHeight={400}>
            <CustomScrollView backgroundColor={"transparent"}>
              <View style={styles.assetContainer}>
                {Array(20)
                  .fill("")
                  ?.map((_, idx) => {
                    return (
                      <View key={idx} style={styles.assetListItem}>
                        <Avatar circular size="$2">
                          <Avatar.Image
                            accessibilityLabel="Cam"
                            src={require("@/assets/home/token/btc.png")}
                          />
                        </Avatar>

                        <View style={styles.assetListItemTextContainer}>
                          <SizableText size={"$4"}>
                            Ethereum Mainnet
                          </SizableText>
                          <View>
                            <EllipsisVertical color={colors.white} />
                          </View>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </CustomScrollView>
          </YStack>
          <XStack flex={1}>
            <StyledButton
              flexGrow={1}
              onPress={() => {
                setNetworkModal(false);
                router.push("/network/add");
              }}
            >
              Add Custom Network
            </StyledButton>
          </XStack>
        </YStack>
      }
    />
  );
};

export default NetworkSheet;

const styles = StyleSheet.create({
  assetContainer: {
    gap: 20,
    marginTop: 20,
  },
  assetListItem: { flexDirection: "row", gap: 20 },
  assetListItemTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    textAlign: "right",
  },
});
