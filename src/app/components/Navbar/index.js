import React, { useEffect, useRef, useState } from 'react'
import { Platform, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useGlobalContext } from '../../context/global';
// import Animated, { SlideInUp, SlideOutUp, isSharedValue, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { router } from 'expo-router';

export const Navbar = ({ translateHeader ,toggleColorScheme, isDark }) => {

    const { navbar } = useGlobalContext()
    const insets = useSafeAreaInsets();
    // const offset = useSharedValue(0)

    // const animatedStyle = useAnimatedStyle(() => ({
    //     transform: [{ translateY: offset.value }],

    // }))


    return (

            <Animated.View
                // entering={SlideInUp}
                // exiting={SlideOutUp}
                style={[
                    styles.navbar,
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginTop: insets.top, // Adiciona margem superior segura
                        transform: [{translateY: translateHeader}],
                        gap: 10,
                    },
                    

                ]}

                key={navbar}>
                <TouchableOpacity>
                    {isDark ?
                            <Feather name='sun' size={24} color={'white'} onPress={() => {}} />
                        :
                            <Feather name='moon' size={24} color={'black'} onPress={() => {}} />
                    }
                </TouchableOpacity>
                <TouchableOpacity>
                    <SimpleLineIcons name="options-vertical" size={20} color="black" onPress={()=>{router.push("../../views/Configs")}}/>
                </TouchableOpacity>
            </Animated.View>
    )

}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#f8f8f8', // bg-zinc-50
        width: '100%',
        height: 56, // h-14 (14 * 4 = 56 pixels)
        paddingHorizontal: 20, // px-5 (5 * 4 = 20 pixels)
        justifyContent: 'center',
        alignItems: 'flex-end', // items-end
        top: 0,
    },
});
export default Navbar