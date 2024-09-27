import { TextStyle, ViewStyle } from "react-native";

export type TabProps = {
  height?: number;
  options: string[];
  borderRadius?: number;
  controlWidth?: number;
  labelStyle?: TextStyle;
  selectedOption: string;
  internalPadding?: number;
  activeLabelColor?: string;
  containerStyle?: ViewStyle;
  activeBoxStyle?: ViewStyle;
  inactiveLabelColor?: string;
  activeLabelStyle?: TextStyle;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
  animationType?: "timing" | "spring";
  onOptionPress?: (option: string) => void;
  springConfig?: { damping?: number; stiffness?: number };
};
