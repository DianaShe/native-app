import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { PostsScreen } from "./PostsScreen";
import Profile from "./ProfileScreen";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";

function Home() {
  const Tabs = createBottomTabNavigator();
  
  const navigation = useNavigation();
  const dispatch = useDispatch()

  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "Posts") {
            iconName = "appstore-o";
          } else if (route.name === "CreatePost") {
            iconName = "plus";
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarShowLabel: false,
        tabBarItemStyle: {
          borderRadius: 100,
          margin: 9,
        },
        tabBarStyle: {
          height: 83,
        },
        tabBarInactiveBackgroundColor: "#FFF",
        tabBarActiveTintColor: "rgba(255, 255, 255, 1)",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        headerStyle: {
          borderBottomColor: "#BDBDBD",
          borderBottomWidth: 1,
          shadowColor: "rgba(0, 0, 0, 0.30)",
          shadowOffset: "0 0.5 0 0",
          height: 88,
        },
        headerTitleStyle: {
          fontSize: 17,
          fontFamily: "Roboto_500Medium",
        },
        headerTitleAlign: 'center',
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <MaterialIcons name="logout" size={24} color="#BDBDBD" style={{marginRight: 10}}
            onPress={() => {
              dispatch(logOut)
              navigation.navigate('Login')}}/>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              style={{marginLeft: 16}}
              size={24}
              color="#212121"
              onPress={() => navigation.navigate('Posts')}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
    </Tabs.Navigator>
  );
}

export default Home;
