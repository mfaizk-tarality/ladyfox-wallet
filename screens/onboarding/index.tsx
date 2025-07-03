import {
  Description,
  PrimaryText,
  StyledButton,
  StyledOutlineButton,
  Surface,
} from "@/component";
import { router } from "expo-router";
import React from "react";
import { H3, Image, SizableText, YStack } from "tamagui";

const Onboarding = () => {
  return (
    <Surface>
      <YStack gap="$10" alignItems="center" justifyContent="flex-end" flex={1}>
        <Image source={require("@/assets/onboarding/1.png")} />
        <YStack gap="$4" alignItems="center">
          <H3>Wallet Setup</H3>
          <Description>
            Import an existing wallet or create a new one
          </Description>
        </YStack>
        <YStack width={"100%"} gap={"$4"}>
          <StyledButton
            variant="outlined"
            onPress={() => router.push("/onboarding/improvement-program")}
          >
            Create New Wallet
          </StyledButton>
          <StyledOutlineButton
            onPress={() => router.push("/onboarding/secret-phrase/empty")}
          >
            I already have a wallet
          </StyledOutlineButton>
          <SizableText textAlign="center">
            By tapping any button you agree and consent to our{" "}
            <PrimaryText>Terms of Service</PrimaryText> and{" "}
            <PrimaryText>Privacy Policy</PrimaryText>
          </SizableText>
        </YStack>
      </YStack>
    </Surface>
  );
};

export default Onboarding;
