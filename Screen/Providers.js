import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProviderComponent from '../Components/ProviderComponent';
import Picture from '../assets/Image/Stephen-Akintayo.jpg';
import secondPicture from '../assets/Image/okunuga.jpg';
import thirdPicture from '../assets/Image/Bisi-Akintayo.png'
import fourthPicture from '../assets/Image/Gabriel.png'

const Providers = () => {
    const [underline, setUnderline] = useState({ firstLink: false, secondLink: false, thirdLink: false })
    const tutors = [
        {
            name: 'Dr Stephen Akintayo',
            image: Picture
        },
        {
            name: 'Okunuga Oluwatobiloba',
            image: secondPicture
        },
        {
            name: 'Bisi Akintayo',
            image: thirdPicture
        },
        {
            name: 'Gabriel st German',
            image: fourthPicture
        },
    ]
    return (
        <View style={{
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
                }}>Providers</Text>
                <View style={{
                    padding: 8,
                    elevation: 1,
                    backgroundColor: 'white',
                    borderRadius: 10
                }}>
                    <AntDesign size={28} color="black" name="bars" />
                </View>

            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 20

            }}>
                <Pressable onPress={() => setUnderline({ firstLink: true, secondLink: false, thirdLink: false })} >
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomWidth: underline.firstLink ? 2 : 0,
                    }}>Instructions(16)</Text>
                </Pressable>
                <Pressable onPress={() => setUnderline({ firstLink: false, secondLink: true, thirdLink: false })} >
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomWidth: underline.secondLink ? 2 : 0,
                    }}>Organizations(16)</Text>
                </Pressable>
                <Pressable onPress={() => setUnderline({ firstLink: false, secondLink: false, thirdLink: true })} >
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomWidth: underline.thirdLink ? 2 : 0,
                    }}>Consultants</Text>
                </Pressable>
            </View>
            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-around'


                }}>

                {tutors.map((tutor, index) => {
                    return (

                        <ProviderComponent key={index} name={tutor.name} image={tutor.image} />

                    )

                }
                )}



            </View>



        </View>
    )
}

export default Providers