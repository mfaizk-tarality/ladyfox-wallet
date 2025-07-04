import { colors } from "@/ui/colors";
import { Sheet } from "@tamagui/sheet";
import React from "react";
import { View, XStack } from "tamagui";

const spModes = ["percent", "constant", "fit", "mixed"] as const;

export const CommonSheet = ({
  open,
  setOpen,
  children,
  snapPoints = undefined,
  snapPointsMode = "fit",
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  snapPoints?: string[] | undefined;
  snapPointsMode?: (typeof spModes)[number];
}) => {
  const [position, setPosition] = React.useState(0);

  return (
    <Sheet
      forceRemoveScrollEnabled={open}
      open={open}
      onOpenChange={setOpen}
      snapPoints={snapPoints}
      snapPointsMode={snapPointsMode}
      dismissOnSnapToBottom
      position={position}
      onPositionChange={setPosition}
      zIndex={100_000}
      animation="medium"
      modal
    >
      <Sheet.Overlay
        animation="lazy"
        backgroundColor="$shadow6"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />

      {/* <Sheet.Handle backgroundColor={colors.white} /> */}
      <Sheet.Frame
        padding="$4"
        justifyContent="center"
        alignItems="center"
        backgroundColor={colors.background}
      >
        <XStack paddingBottom={"$6"}>
          <View
            height={"$0.5"}
            width={"$4"}
            backgroundColor={colors.white}
            borderRadius={"$4"}
          />
        </XStack>
        {children}
      </Sheet.Frame>
    </Sheet>
  );
};
