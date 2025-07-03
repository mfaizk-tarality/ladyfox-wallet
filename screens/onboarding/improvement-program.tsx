import {
  CheckboxWithLabel,
  CustomScrollView,
  PrimaryText,
  StyledButton,
  StyledOutlineButton,
  Surface,
} from "@/component";
import { router } from "expo-router";
import React from "react";
import { H5, SizableText, View, YStack } from "tamagui";

const ImprovementProgram = () => {
  return (
    <Surface justifyContent="space-between" flexDirection="column">
      <CustomScrollView>
        <YStack gap="$2">
          <H5>Improvement Program</H5>
          <SizableText size="$5">
            Help Us Enhance Your MetaMask Experience
          </SizableText>
          <SizableText size="$4">
            We want to collect basic usage data to make MetaMask better. Rest
            assured, we never sell or misuse your personal information.
          </SizableText>
          <PrimaryText>Learn how we protect your privacy</PrimaryText>
          <SizableText size={"$5"}>Our Data Collection Promise:</SizableText>
          <YStack gap={"$4"}>
            <YStack>
              <SizableText>🔒 Privacy First</SizableText>
              {[
                "We track app interactions like clicks and views",
                "Your wallet addresses and sensitive data remain private",
              ]?.map((it, idx) => (
                <SizableText key={idx}>
                  {idx + 1}. {it}
                </SizableText>
              ))}
            </YStack>
            <YStack>
              <SizableText>🌍 General Location Data</SizableText>
              {[
                "We temporarily check your IP to determine country/region",
                "IP addresses are never stored permanently",
              ]?.map((it, idx) => (
                <SizableText key={idx}>
                  {idx + 1}. {it}
                </SizableText>
              ))}
            </YStack>
            <View>
              <CheckboxWithLabel
                size="$4"
                label="We’ll use this data to learn how you interact with our marketing communications. We may share relevant news (like product features)."
              />
            </View>
            <SizableText size="$4">
              We'll let you know if we decide to use this data for other
              purposes. You can review our Privacy Policy for more information.
              Remember, you can go to settings and opt out at any time
            </SizableText>
          </YStack>
        </YStack>
      </CustomScrollView>
      <YStack gap={"$4"}>
        <StyledButton onPress={() => router.push("/onboarding/secret-phrase")}>
          I agree
        </StyledButton>
        <StyledOutlineButton>No thanks</StyledOutlineButton>
      </YStack>
    </Surface>
  );
};

export default ImprovementProgram;
