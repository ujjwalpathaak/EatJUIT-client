import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const AnimationScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OrderComplete");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#4C5081] h-full w-full flex-col items-center justify-center">
      <Text className="font-medium text-white m-2 text-lg">
        Packing your food...
      </Text>
      <Animatable.Image
        source={require("../assets/gif.gif")}
        animation="slideInUp"
        iterationCount={1}
      />
    </SafeAreaView>
  );
};

export default AnimationScreen;
