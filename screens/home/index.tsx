import { Surface } from "@/component";
import React from "react";
import { YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import Header from "./components/header";

const Home = () => {
  return (
    <Surface>
      <LinearGradient
        colors={["rgba(0, 20, 163, 0.2)", "rgba(0, 20, 163, 0)"]}
        width={"100%"}
      >
        <YStack>
          <Header />
        </YStack>
      </LinearGradient>
    </Surface>
  );
};

export default Home;
