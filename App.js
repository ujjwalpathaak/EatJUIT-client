import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import Basket from "./Components/Basket/Basket";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product" component={ProductScreen} options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'fade_from_bottom'
            }}/>
          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'slide_from_bottom'
            }}
          /> */}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
