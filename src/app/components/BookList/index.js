import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Item from './Item'
import Line from '../Line'
import { useColorScheme } from 'react-native'

export default ({ data }) => {

    const {colorScheme} = useColorScheme();
    return (
        <View className='flex p-5 gap-3 dark:bg-zinc-900'>
            {data.map((book, i) => (
                <React.Fragment key={`book ${i + 1}`}>
                    <View
                        className='flex pl-2 justify-center items-start'>
                        <Item name={book.name} book={i} chaptersLength={book.chapters} />
                    </View>
                    <Line/>
                </React.Fragment>
            ))}
        </View>
    )
}