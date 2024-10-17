import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'


export default ({ children }) => {

    return (
        <View className="bg-slate-300 dark:bg-zinc-700 rounded-md mb-[-7px] ml-2 p-2 w-[77%]" style={styles.annotation}>
            <Text className="text-zinc-600 dark:text-zinc-50">
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    annotation: {
        height: "auto",
    },
})