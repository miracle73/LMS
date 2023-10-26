import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TrendingCategoryComponent from '../Components/TrendingCategoryComponent';
import Carousel from 'react-native-snap-carousel';



const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const sliderWidth = viewportWidth;
const itemWidth = viewportWidth * 0.65; // 75% of the screen width
const Categories = () => {
    const carouselRef = useRef(null);

    // Function to handle click event
    const handlePress = (index) => {
        // Navigate to the slide at the specified index
        carouselRef.current.snapToItem(index);
    }


    const trendingComponents = [
        { name: 'Forex', color: 'white', secondImage: '', number: 9 },
        { name: 'Management', color: 'purple', secondImage: '', number: 7 },
        { name: 'Sales and Marketing', color: 'blue', image: '', number: 10 },
        { name: 'Entrepreneurship', color: 'blue', secondImage: '', number: 23 },
    ]
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                gap: 100,
                alignItems: 'center',
            }}>
                <EvilIcons size={28} color="black" name="navicon" />

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Categories</Text>


            </View>
            <Text style={{
                marginTop: 50,
                marginBottom: 10
            }}>Trending</Text>
            <View style={{
                height: 100,

                position: 'relative',
                width: '100%',

            }}>
                {/* <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    animat
                }}>
                    <TrendingCategoryComponent />
                </View> */}
                {/* <Carousel
                    ref={carouselRef}
                    data={trendingComponents}
                    renderItem={({ item, index }) => <TrendingCategoryComponent data={item} name={item.name} number={item.number} onPress={() => handlePress(index)} />}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    loop={false}
                    autoplay={false}
                    inactiveSlideShift={0}

                /> */}
                <ScrollView snapToInterval={viewportWidth} decelerationRate='fast' alwaysBounceHorizontal={true}
                    horizontal showsHorizontalScrollIndicator={false} bounces={false} overScrollMode='never'>
                    {trendingComponents.map((trend) => (
                        <View
                            key={trend.number}
                            style={{


                                width: viewportWidth * 2 / 3,
                                height: viewportHeight
                            }}>
                            <TrendingCategoryComponent key={trend.number} name={trend.name} number={trend.number} />
                        </View>

                    ))}

                </ScrollView>

            </View>
            <View>
                <Text style={{ marginBottom: 10 }}>Browse Categories</Text>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    paddingBottom: 50

                }}>
                    <View style={{ borderBottomWidth: 0.4, }}>
                        <View style={styles.inlineContainer}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                backgroundColor: '#FAFAFA',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Feather size={28} color="black" name="feather" />
                            </View>

                            <View>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}>Entrepreneurship</Text>
                                <Text style={{

                                }}>23 Courses</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.4, }}>
                        <View style={styles.inlineContainer}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                backgroundColor: '#FAFAFA',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <SimpleLineIcons size={28} color="black" name="bag" />
                            </View>

                            <View>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}>Financial Market</Text>
                                <Text style={{

                                }}>10 Courses</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ borderBottomWidth: 0.4, }}>
                        <View style={styles.inlineContainer}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                backgroundColor: '#FAFAFA',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <MaterialIcons size={28} color="black" name="business" />
                            </View>

                            <View>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}>Business Growth</Text>
                                <Text style={{

                                }}>18 Courses</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.4, }}>
                        <View style={styles.inlineContainer}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                backgroundColor: '#FAFAFA',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <MaterialCommunityIcons size={28} color="black" name="sign-real-estate" />
                            </View>

                            <View>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}>Real Estate</Text>
                                <Text style={{

                                }}>25 Courses</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.4, }}>
                        <View style={styles.inlineContainer}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                backgroundColor: '#FAFAFA',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <AntDesign size={28} color="black" name="shoppingcart" />
                            </View>

                            <View>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}>Ecommerce</Text>
                                <Text style={{

                                }}>8 Courses</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        marginTop: 50,
        paddingHorizontal: 20
    },
    inlineContainer: {
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 20,
        paddingHorizontal: 20


    }
})

export default Categories
