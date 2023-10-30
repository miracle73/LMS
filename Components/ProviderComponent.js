import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Picture from '../assets/Image/Stephen-Akintayo.jpg';


const { width } = Dimensions.get('window')

const ProviderComponent = ({ name, image }) => {
    return (
        <View style={{
            height: 180,
            width: width * 0.4,
            backgroundColor: 'white',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginBottom: 15

        }}>
            <View style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: '#90EE90',
                position: 'absolute',
                top: 15,
                right: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <EvilIcons size={12} color="blue" name="calendar" />
            </View>
            <View >
                <Image source={image} style={{
                    height: 70,
                    width: 70,
                    borderRadius: 35,
                    overflow: 'hidden'
                }} />
            </View>
            <Text style={{
                fontWeight: '400',
                marginTop: 5
            }}>{name}</Text>
            <Text style={{
                fontSize: 7
            }}>teacher</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <FontAwesome size={12} color="yellow" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
                <FontAwesome size={12} color="yellow" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
                <FontAwesome size={12} color="yellow" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
                <FontAwesome size={12} color="yellow" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
                <FontAwesome size={12} color="gray" name="star" style={{ marginVertical: 5, marginHorizontal: 2 }} />
            </View>


        </View>
    )
}

export default ProviderComponent