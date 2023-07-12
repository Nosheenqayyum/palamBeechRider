import { ScrollView, ScrollViewProps } from "react-native";
import React from "react";

export default function CustomScrollView(props: ScrollViewProps) {
  return (
    <ScrollView
      bounces={false}
      bouncesZoom={false}
      {...props}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {props.children}
    </ScrollView>
  );
}
