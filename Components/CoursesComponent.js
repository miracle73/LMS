import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import firstImage from '../assets/Image/salesAndMarketing.jpg'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CoursesComponent = ({ name, tutor, time, price, image, text }) => {
    return (
        <View style={styles.container}>

            <ImageBackground source={image} style={{
                height: 100,

                paddingTop: 5,
                paddingLeft: 10,


            }}
                imageStyle={{
                    borderRadius: 15,

                }}>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    flexDirection: 'row',
                    width: 50,
                    height: 25,
                    alignItems: 'center',
                    justifyContent: 'center',


                }}>
                    <Entypo size={18} color="yellow" name="star" />
                    <Text>0.0</Text>
                </View>
            </ImageBackground>


            <Text style={{
                fontWeight: '700',
                width: '85%',
                fontSize: 12,

            }}>{name.length > 30 ? name.substr(0, 30) + '...' : name}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 4
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Ionicons size={13} color="#A9A9A9" name="person" />
                    <Text style={{
                        color: '#A9A9A9',
                        fontSize: 8
                    }}>
                        {tutor.length > 15 ? tutor.substr(0, 15) + '...' : tutor}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <EvilIcons size={13} color="#A9A9A9" name="calendar" />
                    <Text style={{
                        color: '#A9A9A9',
                        fontSize: 8
                    }}>{time} Hour</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5
            }}>
                <Text style={{
                    color: 'blue',
                    fontSize: 14
                }}>{price}</Text>
                <View style={{
                    backgroundColor: 'lightgreen',
                    color: '#A9A9A9',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 25,
                    width: 55,
                    borderRadius: 12
                }}>
                    <Text style={{
                        color: 'blue',
                        fontSize: 8,

                    }}>{text && text} Course</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 200,
        marginHorizontal: 15,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 8,
        justifyContent: 'space-between',


    }
})

export default CoursesComponent