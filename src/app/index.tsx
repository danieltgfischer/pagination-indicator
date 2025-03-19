import { View } from "react-native";
import { Onboarding, PaginationIndicator } from "@/components";
import { useState } from "react";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-white gap-10">
      <PaginationIndicator currentPage={selectedIndex} totalPages={5} />
      <Onboarding
        selectedIndex={selectedIndex}
        onIndexChange={(index) => setSelectedIndex(index)}
        totalPages={5}
      />
    </View>
  );
}
