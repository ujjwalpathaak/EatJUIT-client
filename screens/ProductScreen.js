import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../Components/ProductPage/DishRow";
import BasketPopUp from "../Components/Basket/BasketPopUp";

import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { setRestraunt } from "../features/restaurantSlice";

const ProductScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const MenuArray = route.params.menu;
  // console.log(route.params.img)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketPopUp />
      <SafeAreaView className="flex-col justify-center">
        <View key={route.params._id} className="bg-slate-300 ">
          <View className="bg-slate-200 flex-col justify-end h-[250px]">
            <Image source={{ uri: route.params.img }} className="h-[250px]" />
            <View className="absolute z-10 bg-[#0000009a] w-full">
              <Text className="text-4xl pl-3 pt-3 font-bold text-white">
                {route.params.name}
              </Text>
              <View className=" flex-row items-center pl-3 gap-1 pb-2">
                <StarIcon size={15} color="#FF0063" />
                <Text className="pr-2 text-baser text-slate-300">{route.params.raiting}</Text>
                <MapPinIcon size={15} color="#FF0063" />
                <Text className="text-base text-slate-300">{route.params.location}</Text>
              </View>
            </View>
          </View>
          <Text className="text-xl font-bold p-3 text-[#459292] border-current">Menu</Text>
        </View>
        <ScrollView className="bg-slate-200 h-auto">
          {MenuArray.map((Item, index) => {
            return (
              <DishRow
                dishName={Item.dishName}
                id={Item._id}
                cost={Item.dishCost}
                key={index}
                img={Item.dishImage}
              />
            );
          })}
          <View className="h-[280px]"><Text className="text-slate-200">d</Text></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default ProductScreen;
