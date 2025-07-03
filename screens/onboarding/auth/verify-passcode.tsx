import {
  CustomScrollView,
  Description,
  SecureOtp,
  StyledButton,
  Surface,
} from "@/component";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { H3, Image, SizableText, View, YStack } from "tamagui";

const VerifyPasscode = () => {
  const [passcode, setPasscode] = useState("");
  const [cnfmPasscode, setCnfmPasscode] = useState("");
  return (
    <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
      <Surface>
        <YStack
          gap="$10"
          alignItems="center"
          justifyContent="flex-end"
          flex={1}
        >
          <View />
          <CustomScrollView>
            <YStack alignItems="center">
              <Image source={require("@/assets/onboarding/passcode.png")} />
              <YStack gap="$8" alignItems="center">
                <YStack gap="$4" alignItems="center">
                  <H3>Enter Passcode</H3>
                  <Description>
                    Unlock your wallet using your 6-digit passcode.
                  </Description>
                </YStack>
                <YStack gap={"$4"} alignItems="center" marginTop={"$10"}>
                  <SizableText>Enter Passcode</SizableText>
                  <SecureOtp setText={setPasscode} text={passcode} />
                </YStack>
              </YStack>
            </YStack>
          </CustomScrollView>
          <YStack width={"100%"} gap={"$2"}>
            <StyledButton
              variant="outlined"
              onPress={() => router.push("/onboarding/auth/welcome-biometric")}
            >
              Continue
            </StyledButton>
            <SizableText textAlign="center" size={"$2"}>
              Your passcode helps protect access to your wallet. Don’t share it
              with anyone.
            </SizableText>
          </YStack>
        </YStack>
      </Surface>
    </KeyboardAvoidingView>
  );
};

export default VerifyPasscode;
