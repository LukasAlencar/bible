import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useDeleteAnnotation } from '../../hooks/useDeleteAnnotation';


export const Modal = ({ verseToDelete, onClose, setDeleteAnnotationView }) => {
    const { deleteAnnotation } = useDeleteAnnotation();

    const handleDelete = () => {
        deleteAnnotation(verseToDelete);
        onClose(); // Fecha a modal após deletar
        setDeleteAnnotationView();
    };

    return (
        <Pressable onPress={()=>onClose()} className="absolute w-screen h-screen inset-0 bg-black/50 flex items-center justify-center z-30">
            <Pressable onPress={()=>{}} className="bg-white p-4 rounded-lg w-3/4 flex items-center">
                <Text className="text-center text-xl">Deseja realmente apagar a anotação?</Text>
                <TouchableOpacity onPress={handleDelete} className="bg-green-500 w-4/6 text-white p-2 rounded-md mt-4">
                    <Text className="text-white text-center">Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose} className="bg-red-500 w-4/6 p-2 rounded-md mt-4">
                    <Text className="text-white text-center">Não</Text>
                </TouchableOpacity>
            </Pressable>
        </Pressable>
    );
};
