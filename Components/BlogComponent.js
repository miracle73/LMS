import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const BlogComponent = ({ img, firstText, secondText, date, comment, secondImg, thirdText }) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    height: 200,
                    width: "100%",
                    overflow: 'hidden',
                    borderRadius: 12
                }}>
                    <ImageBackground source={img}
                        style={{ borderRadius: 15, height: '100%', width: '100%', position: 'relative' }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            position: 'absolute',
                            bottom: 10,
                            left: 10
                        }}>
                            <View style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                overflow: 'hidden',

                            }}>
                                <Image source={secondImg} style={{ height: '100%', width: '100%' }} />
                            </View>
                            <Text style={{
                                color: 'white'
                            }}>{thirdText}</Text>
                        </View>
                    </ImageBackground>
                </View>

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 17
                }}>{firstText}</Text>
                <Text style={{
                    fontSize: 12,
                    color: '#D3D3D3',
                    paddingVertical: 10
                }}>{secondText}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <AntDesign size={17} color="#D3D3D3" name="calendar" />
                        <Text style={{
                            color: "#D3D3D3",
                            fontSize: 12
                        }}>{date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <FontAwesome size={17} color="#D3D3D3" name="commenting" />
                        <Text style={{
                            color: "#D3D3D3",
                            fontSize: 12
                        }}>{comment}</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        padding: 5,
        marginVertical: 10
    }
})

export default BlogComponent