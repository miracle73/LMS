import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BlogComponent from '../Components/BlogComponent';
import firstImageBlog from '../assets/Image/blog1.jpg'
import secondImageBlog from '../assets/Image/blog2.jpg'
import thirdImageBlog from '../assets/Image/blog3.jpg'
import Admin from '../assets/Image/Admin.jpg'
import GeorgeHamilton from '../assets/Image/GeorgeHamilton.jpg'

const Blog = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                gap: 130,
                alignItems: 'center',
                marginBottom: 20
            }}>
                <EvilIcons size={28} color="black" name="navicon" />

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Blog</Text>
                <AntDesign size={28} color="black" name="bars" />

            </View>
            <View style={{ paddingBottom: 100 }}>
                <ScrollView alwaysBounceVertical={false}>
                    <BlogComponent img={firstImageBlog}
                        firstText="Become a  Straight-A"
                        secondText="In this text article, I'll explain the two rules I followed to become a straight-A student. If you take my advice , you will get better and lead a more .."
                        date="01 Jul 2021"
                        comment={3}
                        secondImg={Admin}
                        thirdText="Admin" />
                    <BlogComponent
                        img={secondImageBlog}
                        firstText="How To Teach Your Kid Easily"
                        secondText="the primary reason kids struggle with school is fear. And in most cases, it's their parent's fault. I started tutoring math out of financial desperation..."
                        date="30 Jun 2021"
                        comment={1}
                        secondImg={GeorgeHamilton}
                        thirdText="George Hamilton" />
                    <BlogComponent
                        img={thirdImageBlog}
                        firstText="Better Relationship Between Friends"
                        secondText="The tutor-parent relationship is an important relationship 
                        and unfortunately greatly overlooked. Why is it important? Well, a good relationship between you .."
                        date="30 Jun 2021"
                        comment={0}
                        secondImg={GeorgeHamilton}
                        thirdText="George Hamilton"
                    />
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 10,

    }
})

export default Blog
