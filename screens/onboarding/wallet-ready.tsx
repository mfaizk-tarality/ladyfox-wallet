import { Description, PrimaryText, StyledButton, Surface } from "@/component";
import { router } from "expo-router";
import React from "react";
import { H3, Image, View, YStack } from "tamagui";

const WalletReady = () => {
  return (
    <Surface>
      <YStack justifyContent="space-between">
        <View />
        <YStack alignItems="center">
          <Image source={require("@/assets/onboarding/wallet-ready.png")} />
          <YStack gap="$4" alignItems="center">
            <H3>Your Wallet is Ready</H3>
            <Description textAlign="center">
              If you lose your Secret Recovery Phrase, you’ll lose access to
              your wallet. <PrimaryText>Learn how</PrimaryText> to store it
              securely so you can always access your funds.
            </Description>
          </YStack>
        </YStack>
        <YStack gap="$10" alignItems="center" justifyContent="flex-end">
          <YStack width={"100%"} gap={"$4"}>
            <StyledButton
              variant="outlined"
              onPress={() => router.push("/(home)")}
            >
              Done
            </StyledButton>
          </YStack>
        </YStack>
      </YStack>
    </Surface>
  );
};

export default WalletReady;
