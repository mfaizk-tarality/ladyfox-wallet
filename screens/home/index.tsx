import { CustomScrollView, PrimaryText, Surface } from "@/component";
import { opacify } from "@/theme/utils";
import { colors } from "@/ui/colors";
import {
  ArrowDownLeft,
  ArrowUpRight,
  DatabaseZap,
  Eye,
  EyeOff,
} from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, H2, SizableText, View, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import ButtonCenter from "./components/button-center";
import Header from "./components/header";

const Home = () => {
  const [isObsecure, setIsObsecure] = useState(false);
  return (
    <Surface flex={1} padding={0}>
      <LinearGradient
        colors={["rgba(0, 20, 163, 0.2)", "rgba(0, 20, 163, 0)"]}
        flex={1}
      >
        <YStack>
          <Header />
          <View style={styles.heroContainer}>
            <View style={styles.balanceText}>
              <SizableText>Current Balance</SizableText>
              {isObsecure ? (
                <EyeOff
                  color={colors.white}
                  size={16}
                  onPress={() => setIsObsecure((e) => !e)}
                />
              ) : (
                <Eye
                  color={colors.white}
                  size={16}
                  onPress={() => setIsObsecure((e) => !e)}
                />
              )}
            </View>

            <H2>$1,550.50</H2>
            <SizableText color={"green"}>$236.22 (11.20%)</SizableText>
          </View>
          <View style={styles.centerButtonContainer}>
            <ButtonCenter />
            <View style={styles.mainButtonContainer}>
              <TouchableOpacity style={[styles.btnContainer, { width: "34%" }]}>
                <ArrowUpRight color={colors.white} />
                <SizableText>Send</SizableText>
              </TouchableOpacity>
              <View
                style={[
                  styles.btnContainer,
                  {
                    width: "20%",
                    position: "relative",
                  },
                ]}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.primary,
                    height: 50,
                    width: 50,
                    borderRadius: "50%",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DatabaseZap color={colors.white} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={[styles.btnContainer, { width: "34%" }]}>
                <ArrowDownLeft color={colors.white} />
                <SizableText>Receive</SizableText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.heroTextContainer}>
            <SizableText size={"$2"}>Point Farming</SizableText>
          </View>
        </YStack>
        <CustomScrollView backgroundColor={"transparent"}>
          <View style={styles.assetListContainer}>
            <SizableText>Crypto Assets</SizableText>
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
                        <View>
                          <SizableText size={"$5"}>10.56646 ETH</SizableText>
                          <SizableText
                            size={"$2"}
                            fontWeight={"300"}
                            textAlign="right"
                          >
                            $ 29,527.62
                          </SizableText>
                        </View>
                      </View>
                    </View>
                  );
                })}
            </View>
            <View style={styles.manageCryptoContainer}>
              <PrimaryText>Manage Crypto</PrimaryText>
            </View>
          </View>
        </CustomScrollView>
      </LinearGradient>
    </Surface>
  );
};

export default Home;

const styles = StyleSheet.create({
  heroContainer: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  balanceText: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  centerButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    position: "relative",
  },
  mainButtonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    position: "absolute",
    flexGrow: 1,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  heroTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  assetListContainer: {
    backgroundColor: opacify(10, colors.white),
    padding: 20,
    borderRadius: 20,
    flex: 1,
    marginTop: 40,
    justifyContent: "flex-start",
  },
  assetContainer: {
    gap: 20,
    marginTop: 20,
  },
  listAvatarContainer: {
    position: "relative",
    width: 40,
  },
  assetListItem: { flexDirection: "row", gap: 20 },
  assetListItemTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    textAlign: "right",
  },
  manageCryptoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
});
