import { opacify } from "@/theme/utils";
import { colors } from "@/ui/colors";
import { defaultConfig } from "@tamagui/config/v4";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ChevronLeft, Globe } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createTamagui, TamaguiProvider, View, XStack } from "tamagui";

const config = createTamagui(defaultConfig);
export default function RootLayout() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style="dark" />

      <TamaguiProvider config={config} defaultTheme="dark">
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.black,
            },
            headerTintColor: colors.white,
            headerShadowVisible: false,
            headerLeft: () => (
              <XStack>
                <View
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor={opacify(10, colors.white)}
                  height={40}
                  width={40}
                  borderRadius={"$10"}
                  marginRight={"$2"}
                  onPress={() => {
                    if (router.canGoBack()) {
                      router.back();
                    }
                  }}
                >
                  <ChevronLeft color={colors.white} />
                </View>
              </XStack>
            ),
          }}
        >
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
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen
            name="accounts/index"
            options={{
              headerShown: true,
              title: "Accounts",
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="accounts/edit"
            options={{
              headerShown: true,
              title: "Edit Account Name",
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="token/index"
            options={{
              headerShown: true,
              title: "Manage Crypto",
              headerBackVisible: false,
              headerRight: () => (
                <XStack>
                  <View
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor={opacify(10, colors.white)}
                    height={40}
                    width={40}
                    borderRadius={"$10"}
                    marginRight={"$2"}
                    marginTop={"$1"}
                    onPress={() => {
                      // if (router.canGoBack()) {
                      //   router.back();
                      // }
                    }}
                  >
                    <Globe color={colors.white} />
                  </View>
                </XStack>
              ),
            }}
          />
          <Stack.Screen
            name="token/add"
            options={{
              headerShown: true,
              title: "Add Custom Token",
              headerBackVisible: false,
            }}
          />
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
