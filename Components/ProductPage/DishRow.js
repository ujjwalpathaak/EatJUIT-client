import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  CurrencyRupeeIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";

const DishRow = ({ dishName, id, cost, img }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket({ dishName, id, cost, img }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  const [isPressed, setIsPressed] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <View key={id} className="w-full p-2">
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
          setSelectedItem(" ");
          setSelectedItem(id);
        }}
        className="flex-row"
      >
        <View>
          <Text className="text-xl">{dishName}</Text>
          <View className="flex-row justify-between">
            <Text className=" text-slate-500 w-[70%]">
              Tired of eating Red Tomato Pasta? Try this White Sauce Pasta! With
              its silky smooth and aromatic sauce made from butter, milk and all
              purpose flour (maida){" "}
            </Text>
            <Image source={{ uri: img }} className="h-[100px] w-[100px]" />
          </View>
          <View className="pl-1 flex-row items-center">
              
            <Text className="pl-1 text-lg text-[#157A17]">
            ₹ {cost}
            </Text>
          </View>
        </View>
        <View className="flex justify-center align-center bg-slate-200 w-full"></View>
      </TouchableOpacity>

      {isPressed && id === selectedItem && (
        <View key={id} className="flex-row items-center gap-2 pr-3 justify-end">
          <TouchableOpacity onPress={removeItemFromBasket}>
            <MinusCircleIcon size={40} color="#FF4342" />
          </TouchableOpacity>
          <Text className="text-lg">{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={40} color="#008E28" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DishRow;
