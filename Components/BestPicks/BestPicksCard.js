import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";

const BestPicksCard = ({
imgURL, RestrauntName, FoodItem
}) => {
  return (
    <View className="flex-col justify-end w-[320px] h-[30vw] bg-[#1D1D1D] m-1 ">
      <View>
        <Image
          source={{uri: imgURL}}
          className="w-full h-[100%]"
        />
      </View>
      <View className="pl-1 pb-1 z-10 absolute bg-[#0000006e] w-[320px]">
        <Text className="font-bold text-3xl text-white ">{FoodItem}</Text>
        <Text className="font-bold text-xl text-white ">📍{RestrauntName}</Text>
      </View>
    </View>
  );
};

export default BestPicksCard;
