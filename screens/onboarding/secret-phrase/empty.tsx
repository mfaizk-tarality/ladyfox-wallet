import {
  CustomScrollView,
  StyledButton,
  StyledOutlineButton,
  Surface,
} from "@/component";
import PaginatedDots from "@/component/paginated-dots";
import { colors } from "@/ui/colors";
import { router } from "expo-router";
import { ScanQrCode } from "lucide-react-native";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";
import { H5, SizableText, View, XStack, YStack } from "tamagui";

const Empty = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      style={{ flex: 1 }}
    >
      <Surface justifyContent="space-between" flexDirection="column">
        <PaginatedDots doteLength={4} withBack={true} activeDotsIndex={0} />
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
                      <XStack
                        width={"45%"}
                        alignItems="center"
                        gap={"$2"}
                        key={idx}
                      >
                        <View width={"12%"}>
                          <SizableText size={"$4"}>{idx + 1}</SizableText>
                        </View>
                        <View
                          style={[
                            styles.phraseBox,
                            { ...styles.phraseBoxDotted },
                          ]}
                          key={idx}
                        >
                          <TextInput
                            style={{
                              color: colors.white,
                              fontSize: 16,
                              textAlign: "center",
                              width: "80%",
                            }}
                          />
                        </View>
                      </XStack>
                    );
                  })}
              </XStack>
            </YStack>
            <StyledOutlineButton
              icon={<ScanQrCode size={20} />}
              borderColor={"#FBC76680"}
              color={"#FBC76680"}
            >
              Scan
            </StyledOutlineButton>
          </YStack>
        </CustomScrollView>
        <YStack gap={"$4"}>
          <StyledButton
            // disabled
            marginTop={"$4"}
            onPress={() => router.push("/onboarding/auth/verify-passcode")}
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

export default Empty;
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
