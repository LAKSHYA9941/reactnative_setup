import React from "react";
import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";

type TabIconProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  focused: boolean;
};

const TabIcon = ({ icon, label, focused }: TabIconProps) => {
  const iconName = focused ? icon : (icon + "-outline") as any;

  return (
    <View className=" flex-1  min-w-24 min-h-24 items-center justify-center">
      <View
        className=" rounded-xl bg-slate-900"
      >
        <Ionicons
          name={iconName}
          size={24}
          color={focused ? "white" : "#cbd5e1"} // light slate for visibility
        />
      </View>

      {focused && (
        <Text className="text-xs text-slate-200 mt-1 font-medium">
          {label}
        </Text>
      )}
    </View>
  );
};

export default function Layout() {
  const tabs = [
    { name: "index", icon: "home" as const, label: "Home" },
    { name: "search", icon: "search" as const, label: "Search" },
    { name: "saved", icon: "bookmark" as const, label: "Saved" },
    { name: "profile", icon: "person" as const, label: "Profile" },
  ];

  return (
    
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 40,
            left: 16,
            right: 16,
            height: 70,
            borderRadius: 20,
            backgroundColor: "#0c0f14ff", // dark & consistent
            paddingBottom: 6,
            paddingTop: 6,
            borderTopWidth: 0,
            elevation: 10,
          },
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon icon={tab.icon} label={tab.label} focused={focused} />
              ),
            }}
          />
        ))}
      </Tabs>
  );
}
