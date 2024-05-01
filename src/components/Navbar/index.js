import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default ({ toggleColorScheme, isDark }) => {

    return (
        <View className="w-screen h-14 bg-zinc-50 dark:bg-zinc-800 px-5 items-end justify-center">
                <Text>
                    {isDark ?
                        <Feather name='sun' size={24} color={'white'} onPress={() => { toggleColorScheme() }} />
                        :
                        <Feather name='moon' size={24} color={'black'} onPress={() => { toggleColorScheme() }} />
                    }
                </Text>
        </View>
    )
}