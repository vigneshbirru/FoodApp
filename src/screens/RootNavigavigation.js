import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [orderHistory, setOrderHistory] = useState([]); // State to manage order history

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} orderHistory={orderHistory} setOrderHistory={setOrderHistory} />}
        </Stack.Screen>
        <Stack.Screen name="Checkout">
          {props => <CheckoutScreen {...props} setOrderHistory={setOrderHistory} />}
        </Stack.Screen>
        <Stack.Screen name="OrderHistory">
          {props => <OrderHistoryScreen {...props} orderHistory={orderHistory} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


