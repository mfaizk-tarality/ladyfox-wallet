import { colors } from "@/ui/colors";
import { Check, ChevronDown, ChevronUp } from "lucide-react-native";
import React, { useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import {
  Adapt,
  Button,
  Checkbox,
  CheckboxProps,
  FontSizeTokens,
  getFontSize,
  ScrollView,
  Select,
  SelectProps,
  Sheet,
  SizableText,
  styled,
  View,
  XStack,
  YStack,
} from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

export const Surface = styled(XStack, {
  flexWrap: "wrap",
  backgroundColor: colors.black,
  fullscreen: true,
  padding: 20,
  justifyContent: "center",
});
export const CustomScrollView = styled(ScrollView, {
  backgroundColor: colors.black,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
});

export const Description = styled(SizableText, {
  size: "$5",
});

export const StyledOutlineButton = styled(Button, {
  variant: "outlined",
  borderColor: colors.outline,
  borderRadius: 30,
});

export const StyledButton = styled(Button, {
  backgroundColor: colors.primary,
  borderColor: colors.primary,
  borderRadius: 30,
  disabledStyle: {
    backgroundColor: colors.background,
    borderColor: colors.background,
  },
});

export const PrimaryText = styled(SizableText, {
  color: colors.seed,
});

export function CheckboxWithLabel({
  textSize = "$2",
  size,
  label = "Accept terms and conditions",
  ...checkboxProps
}: CheckboxProps & { textSize?: FontSizeTokens; label?: string }) {
  const id = `checkbox-${(size || "").toString().slice(1)}`;
  return (
    <XStack alignItems="flex-start" gap="$4" flexGrow={1} width={"100%"}>
      <Checkbox
        // backgroundColor={colors.primary}
        id={id}
        size={size}
        marginTop={"$2"}
        {...checkboxProps}
      >
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox>
      <View width={"90%"}>
        <SizableText size={textSize} flexShrink={1} htmlFor={id}>
          {label}
        </SizableText>
      </View>
    </XStack>
  );
}

export const SecureOtp = ({
  text,
  setText,
}: {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <OtpInput
      autoFocus={false}
      numberOfDigits={6}
      onTextChange={setText}
      secureTextEntry={true}
      hideStick={true}
      type="numeric"
      theme={{
        pinCodeContainerStyle: {
          height: 16,
          width: 16,
          borderRadius: "50%",
          borderColor: colors.background,
          backgroundColor: colors.background,
        },
        pinCodeTextStyle: {
          width: "100%",
          height: "100%",
        },
        filledPinCodeContainerStyle: {
          backgroundColor: colors.primary,
        },
      }}
      focusColor={colors.primary}
    />
  );
};
