import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  HomeIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-around items-center w-full">
      <TouchableOpacity>
        <View className="flex-col bg-slate-200 rounded-full p-2">
          <HomeIcon color="#FF0063" size={30} />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <View className="flex-col bg-slate-200 rounded-full p-2">
          <UserCircleIcon color="#FF0063" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
