import { View } from "react-native";
import { Onboarding } from "@/components";
import { useState } from "react";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Onboarding
        selectedIndex={selectedIndex}
        onIndexChange={(index) => setSelectedIndex(index)}
        totalPages={5}
      />
    </View>
  );
}
