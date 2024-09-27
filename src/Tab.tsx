import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import Animated, {
  withTiming,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

import { TabProps } from ".";

const Tab: React.FC<TabProps> = React.memo(
  ({
    options,
    labelStyle,
    height = 54,
    onOptionPress,
    selectedOption,
    containerStyle,
    activeBoxStyle,
    activeLabelStyle,
    borderRadius = 9,
    controlWidth = 36,
    internalPadding = 20,
    animationType = "spring",
    activeLabelColor = "black",
    inactiveLabelColor = "gray",
    activeBackgroundColor = "white",
    inactiveBackgroundColor = "lightgray",
    springConfig = { damping: 80, stiffness: 200 },
  }) => {
    const { width: windowWidth } = useWindowDimensions();

    const TabWidth = windowWidth - controlWidth;

    const itemWidth = (TabWidth - internalPadding) / options.length;

    const rStyle = useAnimatedStyle(() => {
      const targetPosition =
        itemWidth * options.indexOf(selectedOption) + internalPadding / 2;

      return {
        left:
          animationType === "spring"
            ? withSpring(targetPosition, springConfig)
            : withTiming(targetPosition),
      };
    }, [selectedOption, options, itemWidth, animationType, springConfig]);

    return (
      <View
        style={[
          styles.container,
          {
            height: height,
            borderRadius: borderRadius,
            width: TabWidth,
            paddingLeft: internalPadding / 2,
            backgroundColor: inactiveBackgroundColor,
          },
          containerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              width: itemWidth,
              backgroundColor: activeBackgroundColor,
            },
            rStyle,
            styles.activeBox,
            activeBoxStyle,
          ]}
        />
        {options.map((option) => {
          const isActive = option === selectedOption;
          return (
            <TouchableOpacity
              onPress={() => {
                onOptionPress?.(option);
              }}
              key={option}
              style={[
                {
                  width: itemWidth,
                },
                styles.labelContainer,
              ]}
            >
              <Text
                style={[
                  isActive ? activeLabelStyle : labelStyle,
                  { color: isActive ? activeLabelColor : inactiveLabelColor },
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  activeBox: {
    top: "10%",
    elevation: 3,
    height: "80%",
    borderRadius: 10,
    shadowOpacity: 0.1,
    position: "absolute",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tab;
