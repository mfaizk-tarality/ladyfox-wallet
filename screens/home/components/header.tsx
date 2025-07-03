import { CustomSelect } from "@/component";
import React from "react";
import { Avatar, XStack } from "tamagui";

const Header = () => {
  return (
    <XStack>
      <Avatar circular size="$2">
        <Avatar.Image
          accessibilityLabel="Cam"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        {/* <Avatar.Fallbcack backgroundColor="$blue10" /> */}
      </Avatar>
      {/* <View width={"100%"}> */}
      <CustomSelect />
      {/* </View> */}
    </XStack>
  );
};

export default Header;
