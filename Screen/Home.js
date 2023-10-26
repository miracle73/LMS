import { View, Text, StyleSheet, Button, TouchableOpacity, Image, Switch, ScrollView, ActivityIndicator, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import SecondIcon from 'react-native-vector-icons/Ionicons';
import ThirdIcon from 'react-native-vector-icons/EvilIcons';
import FourthIcon from 'react-native-vector-icons/FontAwesome';
import ImageSlider from '../Components/ImageSlider';
import landBanker from '../assets/Image/land-banker.jpg'
import marketingImage from '../assets/Image/advanced-marketing-program.jpg'
import forex from '../assets/Image/forex.jpg'
import okunugaImage from '../assets/Image/okunuga.jpg'
import akintayoImage from '../assets/Image/Stephen-Akintayo.jpg'


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const Home = () => {
    const slides = [
        { image: forex, price: 200, name: 'Forex Trading Master Class', time: "1:30 Hours", tutor: "Okunuga Oluwatobiloba", color: 'white', secondImage: okunugaImage },
        { image: landBanker, price: 50, name: 'How to become a millionaire land banker through Mini Estate', time: "1:30 Hours", tutor: "Dr Stephen Akintayo", color: 'white', secondImage: akintayoImage },
        { image: marketingImage, price: 250, name: 'Neil Patels Advanced Marketing Program (Beginners Class) Month 1', time: "20:0 Hours", tutor: "SAU Marketing Program", color: '#6699CC', secondImage: marketingImage }
    ]
    const newestCourses = [
        { name: 'Sales and Marketing Program', color: 'white', secondImage: '', number: 9 },
        { name: 'Financial Market Class', color: 'purple', secondImage: '', number: 7 },
        { name: 'Introduction To Forex Trading (Financial Market Class October, 2023)', color: 'blue', image: '', number: 10 },
        { name: 'Business Start-up Program (October, 2023)', color: 'blue', secondImage: '', number: 23 },
        { name: 'Real Estate Program Introduction Class (October 2023 Cohort)', color: 'blue', secondImage: '', number: 23 },
        { name: 'Understanding the Marketing Environment', color: 'blue', secondImage: '', number: 23 },
        { name: 'The Blogging Millionaire', color: 'blue', secondImage: '', number: 23 },
        { name: "The Billionaire's Mind", color: 'blue', secondImage: '', number: 23 },
        { name: 'Marketing and Promotion', color: 'blue', secondImage: '', number: 23 },
        { name: 'Marketing - The art of Networking', color: 'blue', secondImage: '', number: 23 },
    ]
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
                        }}>Let's start learning! </Text>
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
            <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 15,
                marginLeft: 15
            }}>Featured Courses</Text>
            <ImageSlider slides={slides} />

            <Text>Newest Courses</Text>
            <View style={{
                height: 100,
                width: '100%',

            }}>
                <ScrollView snapToInterval={viewportWidth} decelerationRate='fast' alwaysBounceHorizontal={true}
                    horizontal showsHorizontalScrollIndicator={false} bounces={false} overScrollMode='never'>

                </ScrollView>
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

export default Home