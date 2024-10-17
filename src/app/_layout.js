import React from 'react'
import { Stack, router } from 'expo-router'
import { GlobalContextProvider } from './context/global'
import Navbar from './components/Navbar'
import { useColorScheme } from 'nativewind'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RealmProvider } from '@realm/react'
import { BookSchema, ChapterSchema, VerseSchema } from '../schemas/Bible'
// import { RealmProvider } from ''
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Button, Text, TouchableOpacity } from 'react-native'
export default function Layout({ }) {

    const { colorScheme, toggleColorScheme } = useColorScheme()
    
    return (
        <GlobalContextProvider>
            {/* <RealmProvider> */}
                <SafeAreaProvider >
                    {/* <Navbar toggleColorScheme={toggleColorScheme} isDark={colorScheme === 'dark'} /> */}
                    <RealmProvider schema={[BookSchema,ChapterSchema,VerseSchema]} schemaVersion={1} deleteRealmIfMigrationNeeded>
                        <Stack>
                            <Stack.Screen name='index' 
                            options={{ 
                                title: 'Livros',
                                headerRight: () => (
                                    <TouchableOpacity
                                    onPress={() => router.push('./views/Configs')} // Navegar para a tela de Configurações
                                    style={{ paddingRight: 15 }} // Adiciona padding para evitar que o ícone fique muito colado à borda
                                    >
                                        <SimpleLineIcons name="options-vertical" size={20} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                                    </TouchableOpacity>
                                  ),
                                  headerStyle: {
                                    backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
                                  },
                                  headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
                                }} />
                            <Stack.Screen name='views/Reading/index' options={{ headerShown: false }}  />
                            <Stack.Screen name='views/Configs/index' options={{
                                    title: 'Configurações', 
                                    headerStyle: {
                                        backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
                                    },
                                    headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
                                    }} />
                        </Stack>
                    </RealmProvider>
                </SafeAreaProvider>
            {/* </RealmProvider> */}
        </GlobalContextProvider>
    )
}