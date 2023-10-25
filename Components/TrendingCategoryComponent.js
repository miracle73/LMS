import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const TrendingCategoryComponent = () => {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: 'green',
                height: '100%',
                width: 60,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <SimpleLineIcons size={25} color="white" name="bag" />
            </View>
            <View style={{
                gap: 5
            }}>
                <Text>Forex</Text>
                <Text>9 Courses</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
        gap: 20,
        width: '70%',
        borderRadius: 10
    }
})

export default TrendingCategoryComponent