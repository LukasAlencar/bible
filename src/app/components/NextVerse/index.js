import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} className="absolute top-2/4 right-3 bg-zinc-500/50 p-1 border-zinc-400 border-2 flex rounded-full justify-center items-center z-20">
            <AntDesign name="right" size={24} color="white"/>
        </TouchableOpacity>
    )
}