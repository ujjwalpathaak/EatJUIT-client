import { View, Text, ScrollView } from "react-native";
import React from "react";
import BestPicksCard from "./BestPicksCard";
import { ArrowRightIcon } from "react-native-heroicons/solid";

const BestPicks = () => {
  return (
    <View>
      <View className="flex-row justify-between pt-4 mt-1 pb-4 pl-1 pr-1 border border-[#ff006238] border-r-0 border-l-0 bg-slate-200">
        <Text className="text-2xl text-[#4B8673] font-bold">Developer's Choice ❤️</Text>
        <ArrowRightIcon color="#4B8673"/>
      </View>
      <View className="pt-1 pb-1 ">
        <ScrollView
           horizontal={true}
           snapToAlignment={"center"}
           decelerationRate={"fast"}
           snapToInterval={320}
          
        >
          <BestPicksCard
            imgURL="https://drive.google.com/uc?export=view&id=141jhQVMc8tN0H1Fro0O8l5CC9KGIyutp"
            FoodItem="Oreo Shake"
            RestrauntName="AM2PM"
          />
          <BestPicksCard
            imgURL="https://drive.google.com/uc?export=view&id=1ZU09Z1a9SGpiXueD-1Zj6mRPYP_a4Yt2"
            FoodItem="Paneer Paratha"
            RestrauntName="Aunty ka Dhaba"
          />
          <BestPicksCard
            imgURL="https://drive.google.com/uc?export=view&id=1bxOL8At8PMHnEGP4o0MDCBBPwhB-yHaU"
            FoodItem="Chowmein"
            RestrauntName="Shagun Dhaba"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default BestPicks;
