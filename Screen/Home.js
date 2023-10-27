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
import CoursesComponent from '../Components/CoursesComponent'
import salesAndMarketing from '../assets/Image/salesAndMarketing.jpg'
import introToForex from '../assets/Image/introToForex.jpg'
import businessStartUp from '../assets/Image/BusinessStartUp.jpg'
import realEstate from '../assets/Image/realEstate.jpeg'
import understandingTheMarket from '../assets/Image/understandingTheMarket.jpg'
import theBloggingMillionaire from '../assets/Image/theBloggingMillionaire.jpg'
import theBillioniareMind from '../assets/Image/theBillioniareMind.jpg'
import financialMarketClass from '../assets/Image/financialMarket.jpg'
import marketingAndPromotion from '../assets/Image/marketingAndPromotion.jpg'
import marketingArtOfNetworking from '../assets/Image/marketingArtOfNetworking.jpg'
import secondLandBanker from '../assets/Image/realEstate.jpeg'
import howBillionaires from '../assets/Image/HowBillionaires.jpg'
import coldCalling from '../assets/Image/coldcalling.jpg'
import forexMarketWatch from '../assets/Image/forexMarketWatch.jpg'
import advancedGuide from '../assets/Image/advancedGuide.jpg'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const Home = () => {
    const slides = [
        { image: forex, price: 200, name: 'Forex Trading Master Class', time: "1:30 Hours", tutor: "Okunuga Oluwatobiloba", color: 'white', secondImage: okunugaImage },
        { image: landBanker, price: 50, name: 'How to become a millionaire land banker through Mini Estate', time: "1:30 Hours", tutor: "Dr Stephen Akintayo", color: 'white', secondImage: akintayoImage },
        { image: marketingImage, price: 250, name: 'Neil Patels Advanced Marketing Program (Beginners Class) Month 1', time: "20:0 Hours", tutor: "SAU Marketing Program", color: '#6699CC', secondImage: marketingImage }
    ]
    const bestRated = [
        { image: forex, price: 200, name: 'Forex Trading Master Class', time: 1.30, tutor: "Okunuga Oluwatobiloba", color: 'white', secondImage: okunugaImage },
        { image: landBanker, price: 50, name: 'How to become a millionaire land banker through Mini Estate', time: 1.30, tutor: "Dr Stephen Akintayo", color: 'white', secondImage: akintayoImage },

    ]
    const bestSelling = [
        { image: forex, price: 'Free', name: 'Forex Trading for beginners', time: 6.20, tutor: "Investorpedia", color: 'white', },
        { name: 'The art of cold calling', image: coldCalling, tutor: 'Dr Stephen Akintayo', time: 0.30, price: "Free" },
        { name: 'Financial Market Class (October 2023)', image: financialMarketClass, tutor: 'Okunuga Oluwatobiloba', time: 3, price: "Free" },
        { name: 'Real Estate Program Introduction Class (October 2023 Cohort)', image: realEstate, tutor: 'Joshua Olulana', time: 1.22, price: "$47" },
        { name: 'Sales and Marketing Master Class (Taster Session)', tutor: 'Adeniyi Ogunlana', time: 1.25, price: 'Free', image: salesAndMarketing },
        { name: 'How billionaires make more money', tutor: 'Dr Stephen Akintayo', time: 0.50, price: 'Free', image: howBillionaires },
        { name: 'Forex Market Watch (October, 2023)', tutor: 'Okunuga Oluwatobiloba', time: 1.34, price: 'Free', image: forexMarketWatch },
        { name: 'Real Estate Program Introduction Class (October 2023 Cohort)', image: realEstate, tutor: 'Joshua Olulana', time: 1.22, price: "$47" },
        { name: 'Business Start-up Program (October, 2023)', tutor: 'Adeniyi Ogunlana', image: businessStartUp, time: 1.38, price: "$37" },
        { image: forex, price: "$200", name: 'Forex Trading Master Class', time: 1.30, tutor: "Okunuga Oluwatobiloba", color: 'white', },
        { image: advancedGuide, price: "$147", name: 'Advanced guide to real estate', time: 0.30, tutor: "Ryan Serhant", color: 'white', },

    ]
    const freeCourses = [
        { name: 'Financial Market Class', image: financialMarketClass, tutor: 'Okunuga Oluwatobiloba', time: 3, price: "Free" },
        { name: 'Sales and Marketing Master Class (Taster Session)', tutor: 'Adeniyi Ogunlana', time: 1.25, price: 'Free', image: salesAndMarketing },
        { name: 'How billionaires make more money', tutor: 'Dr Stephen Akintayo', time: 0.50, price: 'Free', image: howBillionaires },
        { name: 'Forex Market Watch (October, 2023)', tutor: 'Okunuga Oluwatobiloba', time: 1.34, price: 'Free', image: forexMarketWatch },
        { image: forex, price: 'Free', name: 'Forex Trading for beginners', time: 6.20, tutor: "Investorpedia", color: 'white', },
        { name: 'The art of cold calling', image: coldCalling, tutor: 'Dr Stephen Akintayo', time: 0.30, price: "Free" },
    ]
    const newestCourses = [
        { name: 'Sales and Marketing Program', tutor: 'Adeniyi Ogunlana', time: 3, price: "$89", image: salesAndMarketing },
        { name: 'Financial Market Class', image: financialMarketClass, tutor: 'Okunuga Oluwatobiloba', time: 3, price: "Free" },
        { name: 'Introduction To Forex Trading (Financial Market Class October, 2023)', image: introToForex, tutor: 'Okunuga Oluwatobiloba', time: 12, price: "$15" },
        { name: 'Business Start-up Program (October, 2023)', tutor: 'Adeniyi Ogunlana', image: businessStartUp, time: 1.38, price: "$37" },
        { name: 'Real Estate Program Introduction Class (October 2023 Cohort)', image: realEstate, tutor: 'Joshua Olulana', time: 1.22, price: "$47" },
        { name: 'Understanding the Marketing Environment', tutor: 'Dr Stephen Akintayo', image: understandingTheMarket, time: 1.20, price: "$69" },
        { name: 'The Blogging Millionaire', image: theBloggingMillionaire, tutor: 'Dr Stephen Akintayo', time: 0.40, price: "$63" },
        { name: "The Billionaire's Mind", image: theBillioniareMind, tutor: 'Dr Stephen Akintayo', number: 1.10, price: "$157" },
        { name: 'Marketing and Promotion', image: marketingAndPromotion, tutor: 'Dr Stephen Akintayo', number: 0.50, price: "$57" },
        { name: 'Marketing - The art of Networking', image: marketingArtOfNetworking, tutor: 'Dr Stephen Akintayo', number: 1, price: "$67" },
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
            <ScrollView alwaysBounceVertical={false}>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 15,
                    marginLeft: 15
                }}>Featured Courses</Text>
                <ImageSlider slides={slides} />
                <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>Newest Courses</Text>
                    <Text style={{ color: '#A9A9A9' }}>View All</Text>
                </View>
                <View style={{

                    height: 250,
                    width: '100%',

                }}>
                    <ScrollView snapToInterval={viewportWidth} decelerationRate='fast' alwaysBounceHorizontal={true}
                        horizontal showsHorizontalScrollIndicator={false} bounces={false} overScrollMode='never'>
                        {newestCourses.map((course, index) => (
                            <View
                                key={index}
                                style={{


                                    width: viewportWidth * 45 / 100,
                                    height: viewportHeight
                                }}>
                                <CoursesComponent name={course.name} tutor={course.tutor} time={course.time} price={course.price} image={course.image} />
                            </View>

                        ))}
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>Newest Bundles</Text>
                    <Text style={{ color: '#A9A9A9' }}>View All</Text>
                </View>

                <View style={{

                    height: 250,
                    width: '100%',

                }}>
                    <ScrollView snapToInterval={viewportWidth} decelerationRate='fast' alwaysBounceHorizontal={true}
                        horizontal showsHorizontalScrollIndicator={false} bounces={false} overScrollMode='never'>
                        {/* {newestCourses.map((course, index) => ( */}
                        <View

                            style={{


                                width: viewportWidth * 45 / 100,
                                height: viewportHeight
                            }}>
                            <CoursesComponent
                                name="Mastering Land Banking Strategies: A Comprehensive Course Bundle"
                                tutor="Dr Stephen Akintayo"
                                time={0}
                                price="$500"
                                text="Text"
                                image={secondLandBanker}
                            />

                        </View>

                        {/* ))} */}
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>Best Rated</Text>
                    <Text style={{ color: '#A9A9A9' }}>View All</Text>
                </View>
                <View style={{

                    height: 250,
                    width: '100%',

                }}>
                    <ScrollView snapToInterval={viewportWidth} decelerationRate='fast' alwaysBounceHorizontal={true}
                        horizontal showsHorizontalScrollIndicator={false} bounces={false} overScrollMode='never'>
                        {bestRated.map((course, index) => (
                            <View
                                key={index}
                                style={{


                                    width: viewportWidth * 45 / 100,
                                    height: viewportHeight
                                }}>
                                <CoursesComponent name={course.name} tutor={course.tutor} time={course.time} price={course.price} image={course.image}
                                />

                            </View>

                        ))}
                    </ScrollView>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    height: 130,
                    width: '100%',
                    borderRadius: 10,
                    justifyContent: 'space-between',
                    paddingVertical: 5,
                    marginHorizontal: 15,
                    paddingHorizontal: 10,
                    marginBottom: 30
                }}>
                    <Text style={{
                        fontWeight: '800',
                        fontSize: 18
                    }}>Reward Courses!</Text>
                    <Text style={{
                        fontWeight: '800',
                        fontSize: 15,
                        color: '#D3D3D3'
                    }}>By spending points</Text>
                    <View style={{
                        backgroundColor: 'blue',
                        borderRadius: 15,
                        height: 30,
                        width: 60,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: 'white' }}>View</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>Best Selling</Text>
                    <Text style={{ color: '#A9A9A9' }}>View All</Text>
                </View>

                <View style={{

                    height: 250,
                    width: '100%',

                }}>
                    <ScrollView snapToInterval={viewportWidth} decelerationRate='fast' alwaysBounceHorizontal={true}
                        horizontal showsHorizontalScrollIndicator={false} bounces={false} overScrollMode='never'>
                        {bestSelling.map((course, index) => (
                            <View
                                key={index}
                                style={{


                                    width: viewportWidth * 45 / 100,
                                    height: viewportHeight
                                }}>
                                <CoursesComponent name={course.name} tutor={course.tutor} time={course.time} price={course.price} image={course.image}
                                />

                            </View>

                        ))}
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>Free Courses</Text>
                    <Text style={{ color: '#A9A9A9' }}>View All</Text>
                </View>
                <View style={{

                    height: 250,
                    width: '100%',

                }}>
                    <ScrollView snapToInterval={viewportWidth} decelerationRate='fast' alwaysBounceHorizontal={true}
                        horizontal showsHorizontalScrollIndicator={false} bounces={false} overScrollMode='never'>
                        {freeCourses.map((course, index) => (
                            <View
                                key={index}
                                style={{


                                    width: viewportWidth * 45 / 100,
                                    height: viewportHeight
                                }}>
                                <CoursesComponent name={course.name} tutor={course.tutor} time={course.time} price={course.price} image={course.image}
                                />

                            </View>

                        ))}
                    </ScrollView>
                </View>
            </ScrollView>


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