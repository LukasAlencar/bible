import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Annotation from '../Annotation'
import { View } from 'react-native'
import Line from '../Line'

export default ({ verse, annotation }) => {


    const [show, setShow] = useState(true)

    const toggleShow = () => {
        setShow(!show)
    }


    return (
        <View>
            <TouchableOpacity onPress={toggleShow}>
                <Text
                    className="dark:text-white"
                    style={{
                        marginBottom: 10,
                    }}>
                    {verse}
                </Text>
                {(annotation && show) &&
                    <Annotation>
                        {annotation}
                    </Annotation>
                }
            </TouchableOpacity>
            <Line/>
        </View>
    )
}