import { StyledButton, StyledInput, Surface } from "@/component";
import { colors } from "@/ui/colors";
import { ScanQrCode } from "lucide-react-native";
import React from "react";
import { XStack, YStack } from "tamagui";

const AddToken = () => {
  return (
    <Surface flexDirection="column" flexGrow={1} width={"100%"}>
      <YStack flexGrow={1} gap={"$4"} width={"100%"}>
        <StyledInput placeholder="Network Name" />
        <XStack alignItems="center" gap={"$4"}>
          <StyledInput placeholder="Address" flex={1} />
          <ScanQrCode color={colors.white} size={30} />
        </XStack>
        <StyledInput placeholder="Name" />
        <StyledInput placeholder="Symbol" />
        <StyledInput placeholder="Decimal" />
      </YStack>
      <XStack>
        <StyledButton flexGrow={1}>Import</StyledButton>
      </XStack>
    </Surface>
  );
};

export default AddToken;
