import { View, Text } from "react-native";
import Button from "./button";
import Animated, {
  FadeInDown,
  FadeOutDown,
  LinearTransition,
} from "react-native-reanimated";

type Props = {
  selectedIndex: number;
  onIndexChange: (index: number) => void;
  totalPages: number;
};

const layoutTransition = LinearTransition.springify()
  .damping(80)
  .stiffness(200);

export default function Onboarding({
  selectedIndex,
  onIndexChange,
  totalPages,
}: Props) {
  const onBackHandle = () => {
    if (selectedIndex > 0) {
      console.log("Back button pressed");
      onIndexChange(selectedIndex - 1);
    }
  };

  const onContinueHandle = () => {
    if (selectedIndex < totalPages - 1) {
      console.log("Continue button pressed");
      onIndexChange(selectedIndex + 1);
    }
  };

  return (
    <View className="flex-1 items-start justify-center w-full">
      <Text>Onboarding {selectedIndex}</Text>
      <View className="flex-row gap-4 justify-start w-full px-2">
        {selectedIndex > 0 && (
          <Button
            onPress={onBackHandle}
            className="bg-gray-300 px-6 py-4 items-center rounded-full"
          >
            <Text>Back</Text>
          </Button>
        )}
        <Button
          onPress={onContinueHandle}
          className="flex-1 bg-blue-500 p-4 items-center rounded-full"
        >
          {selectedIndex === totalPages - 1 ? (
            <Animated.Text
              key="finish-button"
              layout={layoutTransition}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutDown.springify().damping(80).stiffness(200)}
              className="text-white"
            >
              Finish
            </Animated.Text>
          ) : (
            <Animated.Text
              key="continue-button"
              layout={layoutTransition}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutDown.springify().damping(80).stiffness(200)}
              className="text-white"
            >
              Continue
            </Animated.Text>
          )}
        </Button>
      </View>
    </View>
  );
}
