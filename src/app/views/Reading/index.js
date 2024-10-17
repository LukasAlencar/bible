import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Verse from '../../components/Verse';
import NextVerse from '../../components/NextVerse';
import PrevVerse from '../../components/PrevVerse';
import BookAndChapter from '../../components/BookAndChapter';
import { router, useLocalSearchParams } from 'expo-router';
import { useGlobalContext } from '../../context/global';
import { useQuery } from '@realm/react';
import { Modal } from '../../components/Modal';
import { ReturnHome } from '../../components/ReturnHome';
import { useColorScheme } from 'nativewind';
import changeNavigationBarColor from 'react-native-navigation-bar-color';


export default ({ hideNavbar, showNavbar, setBook, setChapter }) => {
    
    const books = useQuery("Book")
    const { chapter, book } = useLocalSearchParams();
    const { navbar, handleSetNavbar } = useGlobalContext();
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [modalShow, setModalShow] = useState(false)
    const book_open = books[book]
    const [verseToDelete, setVerseToDelete] = useState(undefined)
    const [deleteAnnotationView, setDeleteAnnotationView] = useState(() => { })
    const {colorScheme, toggleColorScheme} = useColorScheme();
    // console.log(book_open.chapters)
    
    useEffect(() => {
        if (book_open.chapters[chapter] == undefined) {
            router.back()
        }
        if(colorScheme == 'dark') {
            changeNavigationBarColor('#000000', false)
        }else {
            changeNavigationBarColor('#ffffff', true)
        }
    }, [])

    const handleSetModal = (value, verseNum, deleteAnnotationView) => {
        setModalShow(value)
        setVerseToDelete(verseNum)
        setDeleteAnnotationView(deleteAnnotationView)
    }

    // const captureScrollEvent = ({ contentSize, contentOffset, layoutMeasurement }) => {
    //     const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100

    //     if (scrollPercentage < value) {
    //         handleSetNavbar(false)
    //     } else if (scrollPercentage > value) {
    //         handleSetNavbar(true)
    //     }
    //     setScrollPercentage(value)
    // }

    const captureScrollEvent = ({ contentSize, contentOffset, layoutMeasurement }) => {
        const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;

        if (scrollPercentage < value) {
            handleSetNavbar(false);
        } else if (scrollPercentage > value) {
            handleSetNavbar(true);
        }
        setScrollPercentage(value);
    };

    const prevVerse = () => {
        if (!(Number(book) === 0 && Number(chapter) === 0)) {

            if(Number(chapter) == 0){
                router.setParams({ book: Number(book) - 1, chapter: books[Number(book) - 1].chapters.length - 1 })
            }else{
                router.setParams({ book: book, chapter: Number(chapter) - 1 })
            }
        } else {
            console.warn('Primeiro capítulo')
        }
    }

    const nextVerse = () => {
        if (!(Number(book) === 65 && Number(chapter) === 21)) {
            if(book_open.chapters.length === Number(chapter) + 1){
                router.setParams({ book: Number(book) + 1, chapter: 0 })
            }else{
                router.setParams({ book: book, chapter: Number(chapter) + 1 })
            }
        }else {
            console.warn('Último capítulo')
        }
    }


    const onClose = () => {
        setModalShow(false);
    }
            
   

    return (
        <>
            <StatusBar hidden={colorScheme == 'dark'}/>
            {modalShow &&
                <Modal setDeleteAnnotationView={setDeleteAnnotationView} verseToDelete={verseToDelete} onClose={onClose}/>
            }
            <NextVerse onPress={nextVerse} />
            <PrevVerse onPress={prevVerse} />
            <ScrollView
                //   onScroll={(e) => {captureScrollEvent(e.nativeEvent)}}
                onScroll={({ nativeEvent }) => captureScrollEvent(nativeEvent)}
                scrollEventThrottle={16}
                style={styles.view}
                className="dark:bg-zinc-900 z-10">
                <BookAndChapter book={book_open.bookName} chapter={Number(chapter) + 1} />
                <ReturnHome/>
                {book_open?.chapters[chapter]?.verses?.map((c, i) => {
                    return (
                        <Verse handleSetModal={handleSetModal} key={`verse ${i}`} verse={`${i + 1}. ${c.verse}`} verseNum={c.id} annotation={c.annotation} />
                        )
                    })}
                <View className="h-10"></View>
            </ScrollView>
                <ImageBackground className="w-screen h-screen absolute z-0 opacity-10 mt-10" source={require('../../../../assets/yhwh.png')}/>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 20,
        overflow: 'scroll',
    },
});
