import { Link, router } from 'expo-router'
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default ({ chaptersLength, book }) => {

    const goToReading = (chapter) => {
        router.push('../../views/Reading')
        router.setParams({ chapter: chapter, book: book})
    }

    return (

        <View className='flex flex-row flex-wrap gap-3 p-2 justify-center w-full mb-4'>
            {
                Array.from({ length: chaptersLength }, (_, index) => (

                    <TouchableOpacity style={{shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.16, shadowRadius: 4, elevation: 4,}} 
                    key={`chapter-${index}`} onPress={()=>goToReading(index)} className='w-16 h-16 flex justify-center items-center bg-zinc-200 dark:bg-zinc-800 p-1 rounded-lg'>
                        <Text className="dark:text-zinc-300">
                            {index + 1 }
                        </Text>
                    </TouchableOpacity>

                ))
            }
        </View>
    )
}