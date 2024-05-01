import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default ({ children }) => {

    return (
        <View className="bg-zinc-200 dark:bg-zinc-700 rounded-md" style={styles.annotation}>
            <Text className="dark:text-zinc-300">
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    annotation: {
        width: "auto",
        height: "auto",
        padding: 10,
        marginBottom: 10
    },
})