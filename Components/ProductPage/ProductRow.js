import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ProductRow = () => {
  return (
    <TouchableOpacity className="flex-row">
      <View className="flex-col bg-slate-200 pb-3 w-3/4">
        <Text className="text-xl pl-3 pt-3">PERI-PERI FRIES</Text>
          <Text className="pl-3 text-slate-500">
            efifneio wefn woefn woefn ownf owenf owenf owienf oiwenf oiwenf
            oiwenf oiwnf ownf
          </Text>
        <Text className="pl-3 text-green-500">rupee3434</Text>
      </View>
      <View className="flex justify-center align-center bg-slate-200 w-full">
        <Image
          source={require("../../assets/images/img.jpg")}
          className="h-[80px] w-[80px] "
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductRow;
