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

export function CustomSelect(
  props: SelectProps & { trigger?: React.ReactNode }
) {
  const [val, setVal] = useState("apple");

  return (
    <Select
      value={val}
      onValueChange={setVal}
      disablePreventBodyScroll
      {...props}
    >
      {props?.trigger || (
        <Select.Trigger maxWidth={220} iconAfter={ChevronDown}>
          <Select.Value placeholder="Something" />
        </Select.Trigger>
      )}

      <Adapt platform="touch">
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animation="medium"
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            backgroundColor="$shadowColor"
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$background", "transparent"]}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {/* for longer lists memoizing these is useful */}
            {React.useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  );
                }),
              [items]
            )}
          </Select.Group>
          {/* Native gets an extra icon */}
          {props.native && (
            <YStack
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              alignItems="center"
              justifyContent="center"
              width={"$4"}
              pointerEvents="none"
            >
              <ChevronDown
                size={getFontSize((props.size as FontSizeTokens) ?? "$true")}
              />
            </YStack>
          )}
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["transparent", "$background"]}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}

const items = [
  { name: "Apple" },
  { name: "Pear" },
  { name: "Blackberry" },
  { name: "Peach" },
  { name: "Apricot" },
  { name: "Melon" },
  { name: "Honeydew" },
  { name: "Starfruit" },
  { name: "Blueberry" },
  { name: "Raspberry" },
  { name: "Strawberry" },
  { name: "Mango" },
  { name: "Pineapple" },
  { name: "Lime" },
  { name: "Lemon" },
  { name: "Coconut" },
  { name: "Guava" },
  { name: "Papaya" },
  { name: "Orange" },
  { name: "Grape" },
  { name: "Jackfruit" },
  { name: "Durian" },
];
