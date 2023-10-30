import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Picture from '../assets/Image/NoCourse.png'

const Courses = () => {
    const [underline, setUnderline] = useState({ firstLink: false, secondLink: false })
    return (
        <View style={{
            flex: 1,
            marginTop: 50,
            marginHorizontal: 10
        }}>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                gap: 100,
                alignItems: 'center',
            }}>
                <View style={{
                    padding: 8,
                    elevation: 1,
                    backgroundColor: 'white',
                    borderRadius: 10
                }}>
                    <EvilIcons size={28} color="black" name="navicon" />
                </View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Courses</Text>


            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 10,
                marginTop: 20,
                paddingLeft: 5

            }}>
                <Pressable onPress={() => setUnderline({ firstLink: true, secondLink: false })} >
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomWidth: underline.firstLink ? 2 : 0,
                    }}>Purchased</Text>
                </Pressable>
                <Pressable onPress={() => setUnderline({ firstLink: false, secondLink: true })} >
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomWidth: underline.secondLink ? 2 : 0,
                    }}>Organization</Text>
                </Pressable>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={Picture} style={{ width: 70, height: 70 }} />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>No Courses!</Text>
                <Text style={{
                    fontSize: 8,
                }}>Start learning now by enrolling on courses</Text>
            </View>


        </View>
    )
}

export default Courses