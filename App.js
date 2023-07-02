import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { PostsScreen } from "./screens/PostsScreen";
import { CreatePostsScreen } from "./screens/CreatePostsScreen";
import Home from "./screens/Home";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login"
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}}/>
        <MainStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <MainStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <MainStack.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
