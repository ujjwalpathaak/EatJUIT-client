import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";

const OrderComplete = () => {
  return (
    <SafeAreaView className="h-full w-full bg-[#66BFBF] flex-col items-center justify-end">
      <View className="flex-row bg-[#fffdfd]  h-[15vh] w-[85vw] z-10 absolute top-[20%] items-center justify-between p-7 rounded-lg">
        <View>
          <Text className="p-1">Estimated Arrival</Text>
          <Text className="text-3xl">30-35 Minutes</Text>
        </View>
        <View>
          <Image
            className="w-[80px] h-[80px]"
            source={require("../assets/delivery.png")}
          />
        </View>
      </View>
      <Image
        className="drop-shadow-xl w-full h-[70vh]"
        source={require("../assets/map.png")}
      />
    </SafeAreaView>
  );
};

export default OrderComplete;
