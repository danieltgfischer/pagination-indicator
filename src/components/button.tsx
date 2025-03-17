import { Pressable, PressableProps } from "react-native";
import Animated, {
  AnimatedProps,
  FadeInLeft,
  FadeOutLeft,
  LinearTransition,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const layoutTransition = LinearTransition.springify()
  .damping(80)
  .stiffness(200);

export default function Button({
  children,
  style,
  ...rest
}: AnimatedProps<PressableProps>) {
  return (
    <AnimatedPressable
      entering={FadeInLeft.springify().damping(80).stiffness(200)}
      exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
      layout={layoutTransition}
      style={style}
      {...rest}
    >
      {children}
    </AnimatedPressable>
  );
}
