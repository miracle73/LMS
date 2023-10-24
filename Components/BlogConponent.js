import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BlogConponent = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    height: 200,
                    width: "100%"
                }}>
                    <ImageBackground source={require('../assets/Image/blog1.jpg')}
                        style={{ borderRadius: 15, height: '100%', width: '100%' }}></ImageBackground>
                </View>

                <Text>Become a Straight-A </Text>
                <Text>In this text article, I'll explain the two rules I followed to become a straight-A
                    student. If you take my advice, you will get better grades and lead a more ..
                </Text>
                <View style={{

                }}>
                    <View>
                        <AntDesign size={28} color="black" name="calendar" />
                        <Text>01 Jul 2021</Text>
                    </View>
                    <View>
                        <FontAwesome size={28} color="black" name="commenting" />
                        <Text>0</Text>
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
        padding: 5
    }
})

export default BlogConponent