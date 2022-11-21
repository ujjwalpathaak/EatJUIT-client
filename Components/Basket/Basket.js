import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRightIcon, ArrowRightOnRectangleIcon, ShoppingCartIcon } from "react-native-heroicons/solid";

const Basket = () => {
  
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  let items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const [cart, setCart] = useState([]);
  let temp = [];
  useEffect(() => {
    // console.log(cart)
    for (let index = 0; index < items.length; index++) {
      temp.push(Object.values(items[index]));
    }
    setCart(temp);
  }, []);

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <SafeAreaView className="flex-col items-between justify-between h-full">
      <View>
        <View className="bg-[#66BFBF] h-[10%] flex-row items-center justify-center">
        <ShoppingCartIcon size={40} color="#FF0063" />
          <Text className="text-4xl pl-2 font-bold text-white">Basket</Text>
        </View>
        <ScrollView className="h-[65%]">
          {cart.map((item, index) => {
            return (
              <View className="flex-row justify-between bg-slate-200 mt-[1px] h-[70px] pr-3 pl-1 items-center" key={index}>
                <View className="flex-row items-center">

                <Image source={{uri: item[3]}} className="w-[60px] h-[60px]"/>
                <Text className="pl-2 text-lg text-black font-semibold">{item[0]}</Text>
                </View>
                <Text className="text-[#157A17] text-lg">
                ₹{item[2]}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View className="h-[25%] flex-col justify-between pb-3 pt-2 bg-[#66BFBF]">
        <View className="flex-row items-between justify-between pr-3 pl-3"><Text className="text-base text-[#00000038]">Total</Text><Text className="text-base text-[#00000038]">{total}.00</Text></View>
        <View className="flex-row items-between justify-between pr-3 pl-3"><Text className="text-base text-[#00000038]">GST(5%)</Text><Text className="text-base text-[#00000038]">+ {(5*total)/100}</Text></View>
        <View className="flex-row items-between justify-between pr-3 pl-3"><Text className="text-base text-[#00000038]">Delivery Charges</Text><Text className="text-base text-[#00000038]">+ 70.00</Text></View>
        <View className="flex-row items-center justify-between pr-3 pl-3 pt-1 border-[#0000002f] border-t-[1px]"><Text className="text-2xl text-[#ffffff] font-bold">SubTotal</Text><Text className="text-2xl text-[#ffffff] font-bold">₹ {((5*total)/100) + 70 + total}</Text></View>
        <TouchableOpacity className="flex-row items-center justify-center"><Text className="bg-[#157A17] p-2 pl-4 pr-4 font-bold text-lg rounded-lg text-[#ffffff]">Continue to Payment</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Basket;
