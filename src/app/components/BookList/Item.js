import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Chapters from './Chapters'

export default ({ name, chaptersLength, book }) => {
    
    const [showChapters, setShowChapters] = useState(false)

    return (
        <>
            <TouchableOpacity onPress={()=> setShowChapters(!showChapters)} className='w-full'>
                <Text
                    className='py-5 text-lg text-zinc-700 dark:text-zinc-300'
                >
                    {name}
                </Text>
            </TouchableOpacity>
            {showChapters && (<Chapters book={book} chaptersLength={chaptersLength} />)}
        </>
    )
}