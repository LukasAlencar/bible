import React from 'react'
import { View } from 'react-native'

export default ({editStyle}) => {
    return (
        <View style={editStyle && editStyle} className="w-full h-[1px] bg-zinc-200 mb-3 dark:bg-zinc-700"/>
    )
}