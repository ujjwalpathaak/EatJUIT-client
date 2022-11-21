import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  ArrowRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import dhabasList from "../../Database/DhabaList";
import { useNavigation } from "@react-navigation/native";

const RestrauntCategories = () => {

  const [dabasList, setDabasList] = useState()
  const navigation = useNavigation();
  return (
    <View className="pb-1">
      <View className="flex-row justify-between items-center pt-4 pb-4 pl-1 pr-1 border border-[#ff006238] border-r-0 border-l-0  bg-slate-200" >
        <Text className="text-2xl text-[#4B8673] font-bold">Dhabas</Text>
        <ArrowRightIcon color="#4B8673" />
      </View> 
      <View>
        <ScrollView
          horizontal={true}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          snapToInterval={320}
        >
          {dhabasList.map((dhaba) => {
            return (
              <View key={dhaba._id} className="snap-center">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Product", { name: dhaba.name, raiting: dhaba.raiting, location: dhaba.location, menu: dhaba.menu, img: dhaba.image});
                  }}
                  className="flex-col w-[320px] justify-end  h-[54vw] bg-[#1D1D1D]  mt-2 ml-1 mr-1"
                >
                  <View>
                    <Image
                      source={{ uri: dhaba.image }}
                      className="h-[54vw] w-full"
                    />
                  </View>
                  <View className="pl-1 pb-1 z-10 absolute bg-[#00000083] w-[320px]">
                    <Text className="font-bold text-3xl ml-1 text-[#E3E3E3]">
                      {dhaba.name}
                    </Text>
                    <Text className="font-bold flex justify-center ml-1 text-[#E3E3E3]">
                      <StarIcon size={15} color="white" />
                      {dhaba.raiting}
                    </Text>
                    <Text className="flex justify-center ml-1 text-[#E3E3E3]">
                      <MapPinIcon size={15} color="white" />
                      {dhaba.location}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default RestrauntCategories;
