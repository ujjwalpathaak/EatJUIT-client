import React, { useLayoutEffect } from "react";
import FoodCategories from "../Components/FoodCategories/FoodCategories";
import RestrauntCategories from "../Components/RestrauntCategories/RestrauntCategories";
import Footer from "../Components/Footer/Footer";
import BestPicks from "../Components/BestPicks/BestPicks";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#EAF6F6] h-full flex-col justify-between pl-2 pr-2">
      {/* Header */}
      <View className="flex-col w-full">
        <View className="flex-row pt-2 item-center h-[10%]">
          <View className="flex-row items-center justify-between w-full">
            <View className="flex-row">
              <Image
                source={require("../assets/images/logo.png")}
                className="h-12 w-12 rounded-full "
              />
              <View className="flex-col">
                <Text className="font-medium ml-2 text-[#66BFBF] ">
                  Order Now!
                </Text>
                <Text className="font-bold text-xl text-[#66BFBF]">
                  📍Current Location
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Basket");
              }}
            >
              <View className="flex-col bg-slate-200 rounded-full p-2">
                <ShoppingCartIcon color="#FF0063" size={30} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View className="flex-col justify-center items-center w-full h-[10%] ">
          <View className=" flex-row justify-start pl-1 h-14 items-center w-full border-[#FF0063] border-[1px]">
            <MagnifyingGlassIcon size={30} color="#FF0063" />
            <TextInput
              placeholder="Search for your favourite restraunt..."
              keyboardType="default"
              className="pl-1 border-rose-500"
            />
          </View>
        </View>

        {/* FoodCategories */}
        <ScrollView className="pt-1 h-[80%]">
          <FoodCategories />
          <BestPicks />
          <RestrauntCategories />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
