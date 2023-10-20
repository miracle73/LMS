import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Switch, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import ViewFolder from './Folder/ViewFolder';
import Icon from 'react-native-vector-icons/Ionicons';
import SecondIcon from 'react-native-vector-icons/Ionicons';
import ThirdIcon from 'react-native-vector-icons/EvilIcons';
import FourthIcon from 'react-native-vector-icons/FontAwesome';
import ImageSlider from './Components/ImageSlider';
import Navigation from './Components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  // const slides = [
  //   { image: "forex", price: 200, name: 'Forex Trading Master Class', time: "1:30 Hours", tutor: "Okunuga Oluwatobiloba" },
  //   { image: "land-banker", price: 50, name: 'How to become a millionaire land banker through Mini Estate', time: "1:30 Hours", tutor: "Dr Stephen Akintayo" },
  //   { image: "advanced-marketing-program", price: 250, name: 'Neil Patels Advanced Marketing Program (Beginners Class) Month 1', time: "20:0 Hours", tutor: "SAU Marketing Program" }
  // ]
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <NavigationContainer >

        <Navigation />
        <StatusBar style="light" />

      </NavigationContainer >
    </Stack.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',



//   },
//   firstContainer: {
//     backgroundColor: '#00088E',
//     paddingTop: 50,
//     paddingBottom: 30,
//     paddingHorizontal: 10,
//     borderBottomLeftRadius: 28,
//     borderBottomRightRadius: 28,

//   },
//   textStyle: {
//     color: "#fff",
//     fontSize: 30
//   },
//   buttonstyle: {
//     padding: 10,
//     backgroundColor: "red",
//     width: 100
//   }
// });
