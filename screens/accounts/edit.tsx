import { StyledButton, StyledInput, Surface } from "@/component";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { YStack } from "tamagui";

const Edit = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <Surface flexDirection="column" justifyContent="space-between">
        <YStack width={"100%"} gap={"$4"}>
          <StyledInput placeholder="Account Name" />
          <StyledInput placeholder="Address" />
        </YStack>
        <StyledButton>Save</StyledButton>
      </Surface>
    </KeyboardAvoidingView>
  );
};

export default Edit;
