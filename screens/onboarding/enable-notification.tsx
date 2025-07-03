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

const EnableNotification = () => {
  return (
    <Surface>
      <YStack justifyContent="space-between">
        <View>
          <PaginatedDots doteLength={5} activeDotsIndex={4} />
        </View>
        <YStack alignItems="center">
          <Image source={require("@/assets/onboarding/notification.png")} />
          <YStack gap="$4" alignItems="center">
            <H3>Stay Updated Instantly</H3>
            <Description textAlign="center">
              Get real-time alerts for transactions, security updates, and
              wallet activity.
            </Description>
          </YStack>
        </YStack>
        <YStack gap="$10" alignItems="center" justifyContent="flex-end">
          <YStack width={"100%"} gap={"$4"}>
            <StyledButton
              variant="outlined"
              onPress={() => router.push("/onboarding/wallet-ready")}
            >
              Enable Notifications
            </StyledButton>
            <StyledOutlineButton>Skip, I'll do it later</StyledOutlineButton>
            <SizableText textAlign="center">
              You can turn on notifications anytime in Settings.{" "}
            </SizableText>
          </YStack>
        </YStack>
      </YStack>
    </Surface>
  );
};

export default EnableNotification;
