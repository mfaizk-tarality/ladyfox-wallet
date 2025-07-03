import {
  CheckboxWithLabel,
  CustomScrollView,
  Description,
  StyledButton,
  StyledOutlineButton,
  Surface,
} from "@/component";
import PaginatedDots from "@/component/paginated-dots";
import { colors } from "@/ui/colors";
import { router } from "expo-router";
import { EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { H5, SizableText, Text, View, XStack, YStack } from "tamagui";

const SecretPhaseView = () => {
  const [isObsecure, setIsObsecure] = useState(true);
  return (
    <Surface justifyContent="space-between" flexDirection="column">
      <PaginatedDots doteLength={5} withBack={true} activeDotsIndex={2} />
      <CustomScrollView>
        <YStack gap="$8" alignItems="center" marginTop={"$4"}>
          <YStack alignItems="center">
            <H5>Secret Recovery Phrase</H5>
            <SizableText size="$4" textAlign="center">
              This is your Secret Recovery Phrase. Write it down on paper and
              store it in a safe place. You'll need to confirm it on the next
              screen.
            </SizableText>
          </YStack>
          <YStack width={"100%"}>
            <PhaseBox setIsObsecure={setIsObsecure} isObsecure={isObsecure} />
          </YStack>
        </YStack>
      </CustomScrollView>
      <YStack gap={"$4"}>
        <CheckboxWithLabel label="I have written down my recovery phrase and understand I won’t be able to recover my wallet without it." />
        <StyledButton
          // disabled
          onPress={() => router.push("/onboarding/auth/create-passcode")}
        >
          Continue
        </StyledButton>
      </YStack>
    </Surface>
  );
};

export default SecretPhaseView;

const PhaseBox = ({
  isObsecure,
  setIsObsecure,
}: {
  isObsecure: boolean;
  setIsObsecure: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (isObsecure) {
    return (
      <View style={styles.secretPhaseHiddenContainer}>
        <EyeOff color={colors.white} />
        <Description>Tap to reveal your Secret Recovery Phrase</Description>
        <SizableText>Make sure no one is watching your screen.</SizableText>
        <StyledOutlineButton width={"$14"} onPress={() => setIsObsecure(false)}>
          View
        </StyledOutlineButton>
      </View>
    );
  }
  return (
    <XStack
      gap="$4"
      alignItems="center"
      marginTop={"$4"}
      flexWrap="wrap"
      justifyContent="center"
      borderColor={colors.outline}
      borderWidth={1}
      padding={"$6"}
      borderRadius={"$6"}
    >
      {Array(12)
        .fill("")
        ?.map((_, idx) => {
          return (
            <View style={styles.phraseBox} key={idx}>
              <Text>{idx + 1} Hello</Text>
            </View>
          );
        })}
    </XStack>
  );
};

const styles = StyleSheet.create({
  secretPhaseHiddenContainer: {
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 400,
    borderRadius: 20,
    gap: 14,
  },
  phraseBox: {
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 20,
    width: "45%",
  },
});
