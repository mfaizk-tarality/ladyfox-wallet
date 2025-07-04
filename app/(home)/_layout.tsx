import { opacify } from "@/theme/utils";
import { colors } from "@/ui/colors";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import { Globe, Settings } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { Image } from "tamagui";

const PRIMARY_COLOR = "#130057";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={({ state, descriptors, navigation }) => (
        <View
          style={{
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <View style={styles.mainTabContainer}>
            <View
              style={[
                styles.container,
                {
                  borderTopWidth: 0.5,
                  //   borderTopColor: adjustOpacity(colors.violet, 0.4),
                },
              ]}
            >
              {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const { options } = descriptors[route.key];

                const label =
                  options.tabBarLabel ??
                  options.title ??
                  route.name.replace(/([A-Z])/g, " $1").trim();

                const onPress = () => {
                  const event = navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                };

                return (
                  <AnimatedTouchableOpacity
                    key={route.key}
                    onPress={onPress}
                    activeOpacity={1}
                    layout={LinearTransition.springify().mass(0.5)}
                    style={[
                      styles.tabItem,
                      // {
                      //   backgroundColor: isFocused
                      //     ? "rgba(81, 45, 168, 1)"
                      //     : "transparent",
                      // },
                    ]}
                  >
                    {getIconByRouteName(
                      route.name,
                      isFocused ? colors.primary : colors.white
                    )}
                    <Animated.Text
                      entering={FadeIn.duration(100)}
                      exiting={FadeOut.duration(100)}
                      style={[
                        styles.text,
                        {
                          color: isFocused ? colors.primary : colors.white,
                        },
                      ]}
                    >
                      {label as string}
                    </Animated.Text>
                  </AnimatedTouchableOpacity>
                );
              })}
            </View>
            <View style={styles.botBtnContainer}>
              <Image
                source={require("@/assets/home/bot.png")}
                style={styles.botBtn}
                onPress={() => console.log("hello")}
              />
            </View>
          </View>
        </View>
      )}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="browser"
        options={{
          title: "Browser",
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
        }}
      />
    </Tabs>
  );
}

function getIconByRouteName(routeName: string, color: string) {
  switch (routeName) {
    case "home":
      return <Feather name="home" size={18} color={color} />;
    case "browser":
      return <Globe size={18} color={color} />;
    case "setting":
      return <Settings size={18} color={color} />;
    default:
      return <Feather name="home" size={18} color={color} />;
  }
}

const styles = StyleSheet.create({
  mainTabContainer: {
    position: "absolute",
    bottom: 18,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    bottom: 0,
    backgroundColor: opacify(10, colors.white),
    borderRadius: 40,
  },
  tabItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
  },
  text: {
    color: PRIMARY_COLOR,
    fontWeight: "500",
    fontSize: 12,
  },

  botBtnContainer: {
    width: "20%",
    position: "relative",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  botBtn: {
    width: "100%",
    objectFit: "cover",
    position: "absolute",
    height: 80,
    bottom: -10,
  },
});
