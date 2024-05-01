import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default ({book, chapter }) => {
    return (
        <TouchableOpacity className="w-full h-40 justify-center items-center">
            <Text className="text-xl text-zinc-400">
                {book}
            </Text>
            <Text className="text-3xl text-zinc-700">
                {chapter}
            </Text>
        </TouchableOpacity>
    )
}