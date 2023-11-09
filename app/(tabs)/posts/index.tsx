import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Posts() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/posts/1" style={{ fontSize: 20 }}>
        open post 1
      </Link>
      <Link href="/posts/2" style={{ fontSize: 20 }}>
        open post 2
      </Link>
      <Link href="/posts/3" style={{ fontSize: 20 }}>
        open post 3
      </Link>
    </View>
  );
}
