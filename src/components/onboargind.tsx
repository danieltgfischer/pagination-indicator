import { View, Text } from "react-native";
import Button from "./button";
import Animated, {
  FadeInDown,
  FadeOutDown,
  LinearTransition,
  PinwheelIn,
  PinwheelOut,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
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
      onIndexChange(selectedIndex - 1);
    }
  };

  const onContinueHandle = () => {
    if (selectedIndex < totalPages - 1) {
      onIndexChange(selectedIndex + 1);
    }
  };

  return (
    <View className="items-start justify-center w-full">
      <View className="flex-row gap-4 justify-start w-full px-2">
        {selectedIndex > 0 && (
          <Button
            onPress={onBackHandle}
            className="bg-gray-400 px-6 py-4 items-center rounded-full"
          >
            <Text className="text-white font-bold text-lg">Back</Text>
          </Button>
        )}
        <Button
          onPress={onContinueHandle}
          className="flex-1 bg-blue-500 p-4 items-center rounded-full flex-row gap-2 justify-center"
        >
          {selectedIndex === totalPages - 1 && (
            <Animated.View
              layout={layoutTransition}
              entering={PinwheelIn.delay(300)}
              exiting={FadeOutDown}
            >
              <MaterialIcons name="check-circle" size={24} color="white" />
            </Animated.View>
          )}
          {selectedIndex === totalPages - 1 ? (
            <Animated.Text
              key="finish-button"
              layout={layoutTransition}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutDown.springify().damping(80).stiffness(200)}
              className="text-white font-bold text-lg"
            >
              Finish
            </Animated.Text>
          ) : (
            <Animated.Text
              key="continue-button"
              layout={layoutTransition}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutDown.springify().damping(80).stiffness(200)}
              className="text-white font-bold text-lg"
            >
              Continue
            </Animated.Text>
          )}
        </Button>
      </View>
    </View>
  );
}
