import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
// import FoodCatCard from "./FoodCatCard.js";
import foodCategoriesList from "../../Database/FoodCategories";

const FoodCategories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {foodCategoriesList.map((item) => {
        return (
          <View key={item.id}>
            <TouchableOpacity className="flex-col justify-end w-[100px] h-[100px] bg-red-200 m-1  rounded-xl">
              <Image className="w-[100px] h-full rounded-xl"  source={{uri: item.imgURl}}/>
              <Text className="absolute font-bold p-2 text-[#062C30]">{item.foodItemName}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default FoodCategories;
