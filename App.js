import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { RegistrationScreen } from './screens/RegistrationScreen';
import { LoginScreen } from './screens/LoginScreen';
import { PostsScreen } from './screens/PostsScreen';
import { CreatePostsScreen } from './screens/CreatePostsScreen';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <> 
    {/* <PostsScreen/> */}
    {/* <LoginScreen/> */}
    {/* <RegistrationScreen/> */}
    <CreatePostsScreen/>
     </>
  )
}


