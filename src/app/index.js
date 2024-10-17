import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useState } from 'react';
import ChooseBook from './views/ChooseBook';

import { useQuery, useRealm } from '@realm/react';
import transformedACF from './util/content/ACF_Modified.json';
import { BookSchema } from '../schemas/Bible';
// import { useExportDb } from './exportDb';
// import { ChapterSchema } from '../schemas/Bible';

export default function App() {
  
  const realm = useRealm();
  const [book, setBook] = useState(0);
  const [chapter, setChapter] = useState(0);
  const books = useQuery('Book');
  // const { exportDb } = useExportDb();

  return (
    <>
      {/* <Navbar  /> */}
      {/* <Reading hideNavbar={hideNavbar} showNavbar={showNavbar} book={book} chapter={chapter} setBook={setBook} setChapter={setChapter}/> */}
      <ChooseBook />
      {/* <TouchableOpacity onPress={exportDb}><Text>Export</Text></TouchableOpacity> */}
      {/* <TouchableOpacity onPress={insertData}><Text>Inserir</Text></TouchableOpacity> */}
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll'
  },
});
