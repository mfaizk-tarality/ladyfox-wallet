import { CustomScrollView, StyledButton, Surface } from "@/component";
import PaginatedDots from "@/component/paginated-dots";
import { colors } from "@/ui/colors";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";
import { H5, SizableText, View, XStack, YStack } from "tamagui";

const SemiFill = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      style={{ flex: 1 }}
    >
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
                      <XStack width={"45%"} alignItems="center" gap={"$2"}>
                        <View width={"12%"}>
                          <SizableText size={"$4"}>{idx + 1}</SizableText>
                        </View>
                        <View
                          style={[
                            styles.phraseBox,
                            idx % 3 == 0 && { ...styles.phraseBoxDotted },
                          ]}
                          key={idx}
                        >
                          {idx % 3 == 0 ? (
                            <TextInput
                              style={{
                                color: colors.white,
                                fontSize: 16,
                                textAlign: "center",
                                width: "80%",
                              }}
                            />
                          ) : (
                            <SizableText
                              key={idx}
                              justifyContent="center"
                              alignItems="center"
                              textAlign="center"
                            >
                              Hello
                            </SizableText>
                          )}
                        </View>
                      </XStack>
                    );
                  })}
              </XStack>
            </YStack>
          </YStack>
        </CustomScrollView>
        <YStack gap={"$4"}>
          <StyledButton
            // disabled
            onPress={() => router.push("/onboarding/auth/create-passcode")}
          >
            Continue
          </StyledButton>
          <SizableText size={"$2"} textAlign="center">
            Make sure the phrase is in the exact same order. This ensures only
            you can access your wallet.
          </SizableText>
        </YStack>
      </Surface>
    </KeyboardAvoidingView>
  );
};

export default SemiFill;
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
    width: "84%",
  },
  phraseBoxDotted: {
    borderStyle: "dashed",
  },
});
