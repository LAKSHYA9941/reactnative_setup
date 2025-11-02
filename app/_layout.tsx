import { Stack } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import './globals.css';

export default function RootLayout() {
  useEffect(() => {
    // This is needed for NativeWind to work properly
    StyleSheet.create({});
  }, []);

  return <Stack />;
}
