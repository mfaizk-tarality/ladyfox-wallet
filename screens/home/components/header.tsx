import { useUIStore } from "@/store/ui-store";
import { opacify } from "@/theme/utils";
import { colors } from "@/ui/colors";
import { router } from "expo-router";
import { Bell, ChevronDown, ScanQrCode } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, SizableText, View, XStack } from "tamagui";

const Header = () => {
  const { networkModal, setNetworkModal } = useUIStore();
  return (
    <XStack style={styles.mainContainer}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarWhiteArea}>
          <Avatar
            circular
            size="$1.5"
            onPress={() => setNetworkModal((p) => !p)}
          >
            <Avatar.Image
              accessibilityLabel="Cam"
              src={require("@/assets/home/network/bnb.png")}
            />
          </Avatar>
        </View>
      </View>
      <View style={styles.middleBar} onPress={() => router.push("/accounts")}>
        <Avatar circular size="$1.5">
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
        </Avatar>
        <SizableText>0x92174af...45Ab4</SizableText>
        <ChevronDown color={colors.white} />
      </View>
      <View style={styles.lastBar}>
        <View style={styles.avatarWhiteArea}>
          <Bell color={colors.white} />
        </View>
        <View style={styles.avatarWhiteArea}>
          <ScanQrCode color={colors.white} />
        </View>
      </View>
    </XStack>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    flexGrow: 1,
    padding: 20,
  },
  avatarWhiteArea: {
    backgroundColor: opacify(10, colors.white),
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  avatarContainer: { flexGrow: 1 },
  middleBar: {
    flexDirection: "row",
    backgroundColor: opacify(10, colors.white),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    flexGrow: 1,
    borderRadius: 20,
    gap: 10,
  },
  lastBar: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 4,
    justifyContent: "flex-end",
  },
});
