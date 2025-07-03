import {
  Description,
  StyledButton,
  StyledOutlineButton,
  Surface,
} from "@/component";
import { router } from "expo-router";
import React from "react";
import { H4, Image, SizableText, YStack } from "tamagui";

const SecretPhase = () => {
  return (
    <Surface>
      <YStack gap="$10" alignItems="center" justifyContent="flex-end" flex={1}>
        <Image source={require("@/assets/onboarding/lock.png")} />
        <YStack gap="$4" alignItems="center">
          <H4>Your Secret Recovery Phrase</H4>
          <Description textAlign="center">
            This 12-word phrase is the only way to recover your wallet. Never
            share it with anyone. Store it securely offline.
          </Description>
        </YStack>
        <YStack width={"100%"} gap={"$4"}>
          <StyledButton
            variant="outlined"
            onPress={() => router.push("/onboarding/secret-phrase/view")}
          >
            Continue
          </StyledButton>
          <StyledOutlineButton>Skip, I'll do it later</StyledOutlineButton>
          <SizableText textAlign="center">
            If you lose your secret phrase, you will not be able to recover your
            wallet.
          </SizableText>
        </YStack>
      </YStack>
    </Surface>
  );
};

export default SecretPhase;
