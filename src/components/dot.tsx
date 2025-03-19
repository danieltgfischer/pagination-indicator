import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  size: number;
  animation: SharedValue<number>;
  index: number;
};

export default function Dot({ size, animation, index }: Props) {
  const style = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      backgroundColor: interpolateColor(
        animation.value,
        [index - 1, index, index + 1],
        ["gray", "white", "white"]
      ) as string,
    };
  });
  return (
    <Animated.View
      className="rounded-full items-center justify-center"
      style={style}
    />
  );
}
