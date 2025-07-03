import {
  Description,
  StyledButton,
  StyledOutlineButton,
  Surface,
} from "@/component";
import PaginatedDots from "@/component/paginated-dots";
import { router } from "expo-router";
import React from "react";
import { H3, Image, SizableText, View, YStack } from "tamagui";

const WelcomeBiometric = () => {
  return (
    <Surface>
      <YStack justifyContent="space-between">
        <View>
          <PaginatedDots doteLength={5} activeDotsIndex={1} />
        </View>
        <YStack alignItems="center">
          <Image source={require("@/assets/onboarding/biometric.png")} />
          <YStack gap="$4" alignItems="center">
            <H3>Enable Biometric Login</H3>
            <Description textAlign="center">
              Scan your fingerprint or face for secure and convenient access to
              your account.
            </Description>
          </YStack>
        </YStack>
        <YStack gap="$10" alignItems="center" justifyContent="flex-end">
          <YStack width={"100%"} gap={"$4"}>
            <StyledButton
              variant="outlined"
              onPress={() => router.push("/onboarding/enable-notification")}
            >
              Confirm
            </StyledButton>
            <StyledOutlineButton>Skip, I'll do it later</StyledOutlineButton>
            <SizableText textAlign="center">
              You can enable biometric login later in Settings.
            </SizableText>
          </YStack>
        </YStack>
      </YStack>
    </Surface>
  );
};

export default WelcomeBiometric;
