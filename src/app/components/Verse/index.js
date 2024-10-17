import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Annotation from '../Annotation'
import { View } from 'react-native'
import Line from '../Line'
import { TextInput } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRealm } from '@realm/react'
import { Modal } from '../Modal'
import { useColorScheme } from 'nativewind';

export default ({ verse, annotation, verseNum, handleSetModal }) => {


    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const [annotationText, setAnnotationText] = useState('')
    const realm = useRealm()
    const {colorScheme} = useColorScheme();

    const toggleShow = () => {
        setShow(!show)
    }

    const handleAnnotation = (text) => {
        setAnnotationText(text)
    }

    const addNewAnnotation = () => {
        realm.write(() => {
            const versicle = realm.objectForPrimaryKey('Verse', verseNum)

            if (versicle) {
                // Atualiza a anotação do versículo
                versicle.annotation = annotationText;
                console.log('Anotação salva com sucesso!');
              } else {
                console.log('Versículo não encontrado.');
              }
        })

        if(edit) 
          setEdit(false)
    }

    const openDeleteModal = () => {
        handleSetModal(true, verseNum, deleteAnnotationView)
    }

    const deleteAnnotationView = () =>{
        setAnnotationText('')
        setShow(false)
    }

    const deleteAnnotation = (v) => {
        realm.write(() => {
            const versicle = realm.objectForPrimaryKey('Verse', v)

            if (versicle) {
                // Deleta a anotação do versículo
                versicle.annotation = '';
                console.log('Anotação deletada com sucesso!');
              } else {
                console.log('Versículo não encontrado.');
              }
        })

        setShow(false)
        setAnnotationText('')
    }

    const handleSetEdit = () =>{
        setAnnotationText(annotation)
        setEdit(true)
    }

    if(edit){

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
                    <View className="flex flex-row gap-2 flex-nowrap items-center mb-4">

                    <TextInput
                        style={{minHeight: 32}}
                        multiline={true}        
                        className="bg-slate-300 w-[87%] text-[#222] rounded-md place-content-center pl-2 flex"
                        placeholder="Sua anotação..."
                        defaultValue={annotation}
                        value={annotationText}
                        onChangeText={handleAnnotation}
                        ref={input => input && input.focus()}
                        
                    />
                    <TouchableOpacity onPress={addNewAnnotation} className="w-8 h-8 bg-green-400 rounded-md flex justify-center items-center">
                        <Feather name="check" size={24} color="white" />
                    </TouchableOpacity>
                    </View>         
                </TouchableOpacity>
            </View>
        )
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
                {(annotation && show) ?
                    <View className="flex w-full flex-row gap-2 flex-nowrap justify-center items-center mb-4">
                        <Annotation>
                            {annotation}
                        </Annotation>
                        <TouchableOpacity onPress={handleSetEdit} className="w-8 h-8 bg-blue-400 dark:bg-blue-600 rounded-md flex justify-center items-center">
                            <FontAwesome style={{marginRight: -2}} name="pencil-square-o" size={20} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openDeleteModal} className="w-8 h-8 bg-red-400 dark:bg-red-600 rounded-md justify-center items-center">
                            <Feather name="trash" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    
                    :
                 (show) &&
                    <View className="flex flex-row gap-2 flex-nowrap items-center mb-4">

                        <TextInput
                            style={{minHeight: 32, color: colorScheme == 'dark' ? 'white' : 'black'}}
                            multiline={true}        
                            className="bg-slate-300 dark:bg-zinc-700 dark:placeholder-zinc-50 dark:text-zinc-50 w-[87%]  rounded-md place-content-center pl-2 flex"
                            placeholder="Sua anotação..."
                            value={annotationText}
                            onChangeText={handleAnnotation}
                            placeholderTextColor={colorScheme == 'dark' ? 'white' : 'black'}
                            
                        />
                        <TouchableOpacity onPress={addNewAnnotation} className="w-8 h-8 bg-green-400 dark:bg-green-600 rounded-md flex justify-center items-center">
                            <Feather name="check" size={24} color="white" />
                        </TouchableOpacity>
                    </View>         
                }
            </TouchableOpacity>
            <Line/>
        </View>
    )
}