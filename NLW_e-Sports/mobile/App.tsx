import { StatusBar } from "react-native";

import { useFonts, Inter_400Regular, Inter_900Black, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import { Background } from "./src/components/Background";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_900Black,
    Inter_600SemiBold,
    Inter_700Bold
  });
  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading/>}
    </Background>
  );
}