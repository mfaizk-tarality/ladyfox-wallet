import { CustomScrollView, StyledButton, Surface } from "@/component";
import { CommonSheet } from "@/component/common-sheet";
import { opacify } from "@/theme/utils";
import { colors } from "@/ui/colors";
import { router } from "expo-router";
import {
  Bolt,
  EllipsisVertical,
  ExternalLink,
  SquarePen,
  UserLock,
} from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Image, ListItem, SizableText, View, XStack, YStack } from "tamagui";

const Account = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalState, setModalState] = useState(false);
  return (
    <Surface padding={0} flexDirection="column" flex={1}>
      <CustomScrollView paddingTop={"$6"} width={"100%"}>
        {accountList?.map((item, idx) => {
          return (
            <ListItem
              backgroundColor={
                selectedIndex == idx ? opacify(10, colors.seed) : "transparent"
              }
              borderLeftWidth={2}
              borderLeftColor={
                selectedIndex == idx ? colors.seed : "transparent"
              }
              padding={"$2"}
              paddingHorizontal={"$4"}
              key={idx}
              onPress={() => {
                setSelectedIndex(idx);
              }}
              title={<SizableText size={"$5"}>{item?.acName}</SizableText>}
              subTitle={<SizableText size={"$2"}>{item?.acNumber}</SizableText>}
              icon={
                <Image
                  source={require("@/assets/home/avatar.png")}
                  height={"$3"}
                  width={"$3"}
                />
              }
              iconAfter={
                <View style={styles.rightContainer}>
                  <View style={styles.rightTextContainer}>
                    <SizableText size={"$4"}>$1550.50</SizableText>
                    <SizableText size={"$2"} textAlign="right">
                      5.56 BNB
                    </SizableText>
                  </View>
                  <EllipsisVertical
                    color={colors.white}
                    onPress={() => setModalState(true)}
                  />
                </View>
              }
            />
          );
        })}
      </CustomScrollView>
      <View padding={"$4"}>
        <StyledButton>Add Account or Hardware Wallet</StyledButton>
      </View>
      <CommonSheet
        open={modalState}
        setOpen={setModalState}
        children={
          <YStack width={"100%"} gap={"$4"}>
            {fxnList?.map((item, idx) => {
              return (
                <XStack
                  key={idx}
                  width={"100%"}
                  gap={"$2"}
                  onPress={() => {
                    setModalState(false);
                    router.push(item?.href as never);
                  }}
                >
                  <item.icon color={colors.white} />
                  <SizableText>{item?.title}</SizableText>
                </XStack>
              );
            })}
          </YStack>
        }
      />
    </Surface>
  );
};

export default Account;

const styles = StyleSheet.create({
  rightContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  rightTextContainer: {},
});

const accountList = [
  {
    img: "",
    acName: "Lady Fox 1",
    acNumber: "0x9217464a...45Ab4",
    acAmount: "$1550.50",
    acCurrencyValue: "5.56 BNB",
  },
  {
    img: "",
    acName: "Lady Fox 2",
    acNumber: "0x9217464a...45Ab4",
    acAmount: "$1550.50",
    acCurrencyValue: "5.56 BNB",
  },
];

const fxnList = [
  {
    title: "Edit Account Name",
    icon: SquarePen,
    href: "/accounts/edit",
  },
  {
    title: "View on Testnet",
    icon: Bolt,
    href: "#",
  },
  {
    title: "Share my Public Address",
    icon: ExternalLink,
    href: "#",
  },
  {
    title: "Show private Key",
    icon: UserLock,
    href: "#",
  },
];
