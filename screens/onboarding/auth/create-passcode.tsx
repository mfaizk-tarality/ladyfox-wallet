import {
  CustomScrollView,
  Description,
  SecureOtp,
  StyledButton,
  Surface,
} from "@/component";
import PaginatedDots from "@/component/paginated-dots";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { H3, Image, SizableText, YStack } from "tamagui";

const CreatePasscode = () => {
  const [passcode, setPasscode] = useState("");
  const [cnfmPasscode, setCnfmPasscode] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Surface>
        <YStack
          gap="$10"
          alignItems="center"
          justifyContent="flex-end"
          flex={1}
        >
          <PaginatedDots doteLength={5} activeDotsIndex={0} />
          <CustomScrollView>
            <YStack alignItems="center">
              <Image source={require("@/assets/onboarding/passcode.png")} />
              <YStack gap="$8" alignItems="center">
                <YStack gap="$4" alignItems="center">
                  <H3>Create Passcode</H3>
                  <Description>
                    Secure your wallet with a 6-digit passcode.
                  </Description>
                </YStack>
                <YStack gap={"$4"} alignItems="center">
                  <SizableText>Create Passcode</SizableText>
                  <SecureOtp setText={setPasscode} text={passcode} />
                </YStack>
                <YStack gap={"$4"} alignItems="center">
                  <SizableText>Confirm Passcode</SizableText>
                  <SecureOtp setText={setCnfmPasscode} text={cnfmPasscode} />
                </YStack>
              </YStack>
            </YStack>
          </CustomScrollView>
          <YStack width={"100%"} gap={"$2"}>
            <SizableText textAlign="center" size={"$2"}>
              Make sure both passcodes match.
            </SizableText>

            <StyledButton
              variant="outlined"
              onPress={() => router.push("/onboarding/auth/welcome-biometric")}
            >
              Create New Wallet
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

export default CreatePasscode;
