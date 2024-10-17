import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native"
import { ReturnHome } from "../../components/ReturnHome"
import { StatusBar } from "react-native"
import Line from "../../components/Line"
import { useActionData } from "../../hooks/useActionData"
import { useColorScheme } from 'nativewind';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { useEffect } from "react"


export default () => {

    const { insertData, exportDb } = useActionData()
    const {colorScheme, toggleColorScheme} = useColorScheme();

    const handleExport = () => {
        exportDb()
    }
    
    const handleImport = () => {
        insertData()
    }

    useEffect(() => {
        if(colorScheme == 'dark') {
            changeNavigationBarColor('#000000', false)
        }else {
            changeNavigationBarColor('#ffffff', true)
        }
    }, [])

    return (
        <View className="dark:bg-zinc-900" style={{flex: 1, paddingVertical: 20}}>
            <StatusBar style={colorScheme == 'dark' ? 'light' : 'dark'} />
            <View className="flex items-start justify-start flex-1 ">
                <Text className="pl-5 p-2 font-bold text-lg dark:text-zinc-300">Dados: </Text>

                <TouchableOpacity onPress={handleImport} className="flex flex-row items-center  p-2 w-full h-12">
                    <Text className="dark:text-zinc-300">
                        Importar
                    </Text>
                </TouchableOpacity>
                <Line editStyle={{marginBottom: 0}}/>
                <TouchableOpacity onPress={handleExport} className="flex flex-row items-center  p-2 w-full h-12">
                    <Text className="dark:text-zinc-300">
                        Exportar
                    </Text>
                </TouchableOpacity>
                <Line editStyle={{marginBottom: 0}}/>
                <View className="flex flex-row items-center">
                    <Text className="p-2 dark:text-zinc-300">Tema escuro: </Text>
                    <Switch value={colorScheme =='dark'} onChange={toggleColorScheme} />
                </View>
            </View>
        </View>
    )
}