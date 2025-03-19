import { View } from "react-native";
import Dot from "./dot";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  currentPage: number;
  totalPages: number;
};

const dotContainerSize = 30;
const dotSize = dotContainerSize * 0.3;
const spacing = 10;

export default function PaginationIndicator({
  currentPage,
  totalPages,
}: Props) {
  const animation = useDerivedValue(() => {
    return withSpring(currentPage, {
      damping: 80,
      stiffness: 200,
    });
  });

  const style = useAnimatedStyle(() => {
    return {
      width: dotContainerSize + dotContainerSize * animation.value,
    };
  });

  return (
    <View
      className="flex-row  w-full justify-center items-center relative"
      style={{ gap: spacing }}
    >
      <View
        className="flex-row items-center justify-center"
        style={{ gap: spacing * 2 }}
      >
        <Animated.View
          style={[
            {
              position: "absolute",
              left: -spacing,
              height: dotContainerSize,
              width: dotContainerSize,
              borderRadius: dotContainerSize,
              backgroundColor: "#3b82f6",
            },
            style,
          ]}
        />
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot key={index} size={dotSize} index={index} animation={animation} />
        ))}
      </View>
    </View>
  );
}
