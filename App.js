import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Switch, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import ViewFolder from './Folder/ViewFolder';
import Icon from 'react-native-vector-icons/Ionicons';
import SecondIcon from 'react-native-vector-icons/Ionicons';
import ThirdIcon from 'react-native-vector-icons/EvilIcons';
import FourthIcon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 3 }}>
          <View style={{ marginRight: 8 }}>
            <ThirdIcon size={28} color="white" name="navicon" />
          </View>

          <View style={{}}>
            <Text style={{
              color: 'white',
              fontSize: 22,
              fontFamily: 'normal',
            }}>Stephen Akintayo Uni...</Text>
            <Text style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'normal',
            }}>Let's start learning!</Text>
          </View>
          <View style={{
            padding: 5,
            backgroundColor: "#000456",
            borderRadius: 12
          }}>
            <Icon size={24} color="white" name="notifications-sharp" />
          </View>

          <View style={{
            padding: 5,
            backgroundColor: "#000456",
            borderRadius: 12
          }}>
            <SecondIcon size={24} color="white" name="cart" />
          </View>

        </View>
        <View style={{
          backgroundColor: 'white',
          borderRadius: 14, marginTop: 30, height: 50, flexDirection: 'row', alignItems: 'center',
          justifyContent: 'start', paddingHorizontal: 10
        }} >
          <FourthIcon size={24} color="black" name="search" />
          <TextInput placeholder='what are you going to find' style={{ color: '#D3D3D3', marginLeft: 10 }} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',



  },
  firstContainer: {
    backgroundColor: '#00088E',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,

  },
  textStyle: {
    color: "#fff",
    fontSize: 30
  },
  buttonstyle: {
    padding: 10,
    backgroundColor: "red",
    width: 100
  }
});
