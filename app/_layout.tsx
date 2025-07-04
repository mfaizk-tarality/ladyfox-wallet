import { defaultConfig } from "@tamagui/config/v4";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createTamagui, TamaguiProvider } from "tamagui";

const config = createTamagui(defaultConfig);
export default function RootLayout() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style="dark" />

      <TamaguiProvider config={config} defaultTheme="dark">
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="onboarding/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/improvement-program"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/secret-phrase/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/secret-phrase/view"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/auth/create-passcode"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/auth/welcome-biometric"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/auth/verify-passcode"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/enable-notification"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/wallet-ready"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/secret-phrase/semi-fill"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="onboarding/secret-phrase/empty"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(home)" options={{ headerShown: false }} />{" "}
        </Stack>
      </TamaguiProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
