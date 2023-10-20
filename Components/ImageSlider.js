import { View, Text, StyleSheet, ImageBackground, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import SecondIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ImageSlider = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [imageSource, setImageSource] = useState(`../assets/Image/forex.jpg`);
    // const joy = props.slides[currentIndex].image
    // console.log(props.slides[currentIndex].image)
    // const url = (props.slides[currentIndex].image === "forex") ? `../assets/Image/forex.jpg` : `../assets/Image/land-banker.jpg`;
    const joy1 = `../assets/Image/land-banker.jpg`
    const joy2 = imageSource
    console.log(joy1)
    return (
        <View>
            <View style={styles.container}>
                <ImageBackground source={require(joy1)}
                    style={styles.secondContainer}
                    resizeMode="cover">
                    <View style={{
                        backgroundColor: "white",
                        width: 50,
                        borderRadius: 9,
                        position: 'absolute',
                        top: 30,
                        right: 15,
                        flexDirection: 'row',
                        justifyContent: 'center'

                    }}>
                        <Text style={{ color: 'purple' }}>${props.slides[currentIndex].price}</Text>
                    </View>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 13,
                        position: 'absolute',
                        top: 130,
                        left: 10
                    }}>{props.slides[currentIndex].name}</Text>
                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        top: 150,
                        left: 10
                    }}>
                        <Icon size={12} color="yellow" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
                        <Icon size={12} color="yellow" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
                        <Icon size={12} color="yellow" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
                        <Icon size={12} color="yellow" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
                        <Icon size={12} color="white" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            top: 170,
                            left: 10,
                            width: "100%",
                            justifyContent: "start",
                            alignItems: "center",

                        }}>
                        <View style={{
                            borderRadius: 20,
                            overflow: 'hidden',
                            height: 40,
                            width: 40,

                        }}>
                            <Image source={require('../assets/Image/okunuga.jpg')}
                                style={{
                                    height: '100%',
                                    width: '100%'
                                }} />



                        </View>
                        <Text style={styles.textStyle}>{props.slides[currentIndex].tutor}</Text>
                        <SecondIcon size={12} color="white" name="clock-time-four" />
                        <Text style={{
                            color: "white",
                            fontSize: 10,
                            fontWeight: 'bold'
                        }}> {props.slides[currentIndex].time}</Text>
                    </View>

                </ImageBackground>

            </View>
            <View style={{
                flexDirection: 'row',
                width: "100%",
                justifyContent: 'center',
                marginHorizontal: 'auto',
            }}>{props.slides.map((slide, slideIndex) => {
                const isCurrentButton = slideIndex === currentIndex;
                return (
                    <Pressable key={slideIndex}
                        style={isCurrentButton ? {
                            height: 15,
                            width: 25,
                            borderRadius: 7,
                            backgroundColor: "blue",
                            margin: 5
                        } : {
                            height: 15,
                            width: 15,
                            borderRadius: 7,
                            backgroundColor: "#808080",
                            margin: 5
                        }}
                        onPress={() => {
                            console.log("3")
                            setCurrentIndex(slideIndex)
                            // console.log(slideIndex)
                        }}>

                    </Pressable>
                )
            })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 15,
        height: 220

    },
    secondContainer: {
        height: '100%',
        width: '100%',

    },
    textStyle: {
        color: "white",
        fontSize: 10,
        marginHorizontal: 10,
        fontWeight: 'bold'
    }
})

export default ImageSlider