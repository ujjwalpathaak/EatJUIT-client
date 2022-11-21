import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { CurrencyRupeeIcon } from "react-native-heroicons/solid";

const BasketPopUp = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const total = useSelector(selectBasketTotal);
  <Text>{total}</Text>
  return (
      <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="bg-[#66BFBF] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
      onPress={() => {
        navigation.navigate("Basket");
      }}
    >
        <Text className="text-white font-extrabold text-lg bg-[#000000] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white text-xl font-extrabold text-center">View Basket</Text>
        <View className="flex-row items-center">
          <CurrencyRupeeIcon size={40} color="black"/>
          <Text className="text-lg text-white font-exreabold pl-2 font-bold">{total}.00</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BasketPopUp;
