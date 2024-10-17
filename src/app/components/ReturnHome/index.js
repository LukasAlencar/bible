import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useColorScheme } from 'nativewind';

export const ReturnHome = ({editStyle}) => {
    
    const { colorScheme } = useColorScheme();

    const goToHome = () => {
        router.push('/')
    }
    return (
        <View style={editStyle} className={`absolute left-0 top-10 z-10`} >
            <TouchableOpacity onPress={goToHome}>
                <MaterialIcons name="keyboard-return" size={27} color={colorScheme == 'dark' ? '#d4d4d8' : 'black'} />
            </TouchableOpacity>
        </View>
    )
}