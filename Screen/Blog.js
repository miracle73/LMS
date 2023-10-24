import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BlogConponent from '../Components/BlogConponent';

const Blog = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                gap: 130,
                alignItems: 'center',
            }}>
                <EvilIcons size={28} color="black" name="navicon" />

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Blogers</Text>
                <AntDesign size={28} color="black" name="bars" />

            </View>
            <BlogConponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 10
    }
})

export default Blog
