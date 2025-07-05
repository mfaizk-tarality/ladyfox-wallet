import { StyledButton, StyledInput, Surface } from "@/component";
import React from "react";
import { XStack, YStack } from "tamagui";

const AddNetwork = () => {
  return (
    <Surface flexDirection="column" flex={1}>
      <YStack flexGrow={1} gap={"$4"} width={"100%"}>
        <StyledInput placeholder="Network Name" />
        <StyledInput placeholder="RPC Url" />
        <StyledInput placeholder="Chain ID" />
        <StyledInput placeholder="Symbol" />
        <StyledInput placeholder="Block Explorer Url" />
      </YStack>
      <XStack>
        <StyledButton flexGrow={1}>Save</StyledButton>
      </XStack>
    </Surface>
  );
};

export default AddNetwork;
