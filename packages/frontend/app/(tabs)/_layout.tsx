import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="sports"
        options={{
          title: "Sports",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="soccer-field"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="championship"
        options={{
          title: "Championship",
          tabBarIcon: () => <Octicons name="trophy" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          title: "Live",
          tabBarIcon: () => (
            <MaterialIcons name="live-tv" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="league"
        options={{
          title: "League",
          tabBarIcon: () => (
            <Ionicons name="football-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <FontAwesome5 name="user" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
