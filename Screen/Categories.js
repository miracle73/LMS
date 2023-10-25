import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TrendingCategoryComponent from '../Components/TrendingCategoryComponent';



const Categories = () => {
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
                margin: 'auto',
                position: 'relative',
                width: '90%',
                display: 'grid'

            }}>
                <View>
                    <TrendingCategoryComponent />
                </View>

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
