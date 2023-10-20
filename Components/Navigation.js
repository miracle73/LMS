import { View, Text, Image } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo';
import SecondIcon from 'react-native-vector-icons/MaterialIcons';
import ThirdIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FourthIcon from 'react-native-vector-icons/FontAwesome';
import FifthIcon from 'react-native-vector-icons/AntDesign';
import Home from '../Screen/Home'
import Blog from '../Screen/Blog'
import Categories from '../Screen/Categories'
import Providers from '../Screen/Providers'
import Courses from '../Screen/Courses'

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (


        <Tab.Navigator
            barStyle={{
                backgroundColor: '#00088E',
                color: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                showLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: '#00088E',
                },
                tabBarLabelStyle: {
                    display: "none"
                },
            })}>
            <Tab.Screen
                name="Categories"
                component={Categories}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ }) => (
                        <FifthIcon size={25} name="windowso" color="white" />
                    )
                }}
            />
            <Tab.Screen
                name="Providers"
                component={Providers}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ }) => (
                        <SecondIcon size={25} name="people" color="white" />
                    )
                }}
            />
            <Tab.Screen
                name="cool"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ }) => (
                        <View style={{
                            height: 40,
                            width: 40,
                            borderRadius: 10,
                            backgroundColor: 'green',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: [{ rotateX: '10deg' }, { rotateZ: '45deg' }],
                            position: 'absolute',
                            bottom: 5
                        }}>
                            <View style={{ transform: [{ rotate: '-45deg' }] }}>
                                <Icon size={25} name="home" color="white" />
                            </View>

                        </View>

                    )
                }}
            />
            <Tab.Screen
                name="Blog"
                component={Blog}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ }) => (
                        <ThirdIcon size={25} name="note-text" color="white" />
                    )
                }}
            />
            <Tab.Screen
                name="Courses"
                component={Courses}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ }) => (
                        <FourthIcon size={25} name="video-camera" color="white" />
                    )
                }} />


        </Tab.Navigator>

    )
}

export default Navigation