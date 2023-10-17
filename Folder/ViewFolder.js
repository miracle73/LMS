import React from 'react'
import { Image, View } from 'react-native'

const ViewFolder = () => {
    return (

        <View style={{
            height: 100,
            width: 100
        }}>
            <Image source={
                require("../assets/imgs.jpg")
            } />
        </View>

    )
}

export default ViewFolder
