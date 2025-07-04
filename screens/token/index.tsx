import {
  CustomScrollView,
  StyledButton,
  StyledInput,
  StyledSwitchTrack,
  Surface,
} from "@/component";
import { colors } from "@/ui/colors";
import { router } from "expo-router";
import { Search } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, SizableText, Switch, View, XStack, YStack } from "tamagui";

const Token = () => {
  return (
    <Surface>
      <YStack flex={1}>
        <XStack position="relative">
          <Search color={colors.white} style={styles.inputIcon} />
          <StyledInput
            placeholder="Search"
            flexGrow={1}
            paddingLeft={"$8"}
            placeholderTextColor={colors.white}
          />
        </XStack>
        <CustomScrollView>
          <View style={styles.assetContainer}>
            {Array(3)
              .fill("")
              ?.map((_, idx) => {
                return (
                  <View key={idx} style={styles.assetListItem}>
                    <View style={styles.listAvatarContainer}>
                      <Avatar circular size="$3.5">
                        <Avatar.Image
                          accessibilityLabel="Cam"
                          src={require("@/assets/home/token/btc.png")}
                        />
                      </Avatar>
                      <Avatar
                        circular
                        size="$1"
                        position="absolute"
                        right={"$-2"}
                        bottom={"$2"}
                      >
                        <Avatar.Image
                          accessibilityLabel="network"
                          src={require("@/assets/home/network/bnb.png")}
                        />
                      </Avatar>
                    </View>
                    <View style={styles.assetListItemTextContainer}>
                      <View>
                        <SizableText size={"$5"}>Ethereum</SizableText>
                        <SizableText size={"$5"} fontWeight={"300"}>
                          ETH
                        </SizableText>
                      </View>
                      <View justifyContent="center">
                        <StyledSwitchTrack
                          size={"$2"}
                          defaultChecked={true}
                          backgroundColor={colors.primary}
                          borderColor={colors.primary}
                        >
                          <Switch.Thumb animation="quicker" />
                        </StyledSwitchTrack>
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        </CustomScrollView>
        <XStack>
          <StyledButton flexGrow={1} onPress={() => router.push("/token/add")}>
            Add Custom Token
          </StyledButton>
        </XStack>
      </YStack>
    </Surface>
  );
};

export default Token;

const styles = StyleSheet.create({
  inputIcon: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  assetContainer: {
    gap: 20,
    marginTop: 20,
  },
  assetListItem: { flexDirection: "row", gap: 20 },
  listAvatarContainer: {
    position: "relative",
    width: 40,
  },
  assetListItemTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    textAlign: "right",
  },
});
