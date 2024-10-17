import { useQuery, useRealm } from '@realm/react';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import transformedACF from '../util/content/realm_export.json';

export const useActionData = () => {
  const books = useQuery('Book'); // Consulta todos os livros
  const chapters = useQuery('Chapter'); // Consulta todos os capítulos
  // Não precisamos consultar chapters e verses separadamente
  const realm = useRealm();

  const exportDb = async () => {
    // Verifica se os dados de livros estão disponíveis
    if (books.length === 0) {
      console.log("Nenhum dado disponível para exportação.");
      return;
    }
  
    const allData = books.map((book) => {
      return {
        bookName: book.bookName,
        chapters: book.chapters.map((chapter) => {
          return chapter.verses.map((verse) => {
            return {
              id: verse.id,
              verse: verse.verse,
              annotation: verse.annotation,
              first: verse.first,
              last: verse.last,
            };
          });
        }),
      };
    });
  
    // Converte tudo para JSON
    const jsonString = JSON.stringify(allData, null, 2);
  
    // Defina um caminho para salvar o arquivo JSON
    const fileUri = `${FileSystem.documentDirectory}realm_export.json`;
  
    // Escreve o arquivo no sistema de arquivos
    await FileSystem.writeAsStringAsync(fileUri, jsonString);
  
    console.log('Exportado com sucesso para:', fileUri);
  
    // Compartilhar o arquivo exportado
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri);
    } else {
      console.log('Compartilhamento não disponível.');
    }
  };
  

  const insertData = async () => {  
    realm.write(() => {

      realm.delete(realm.objects('Book'));
      realm.delete(realm.objects('Verse'));
      realm.delete(realm.objects('Chapter'));

      
      transformedACF.forEach((book) => {
        // Array para armazenar capítulos temporariamente
        const chapters = [];
  
        book.chapters.forEach((chapterData) => {
          const verses = [];

          // console.log('chapterData')
          chapterData.forEach((verse) => {
            // Inserir versículos no array do capítulo
            verses.push({
              id: verse.id,
              verse: verse.verse,
              annotation: verse.annotation,
              first: verse.first,
              last: verse.last,
            });
          });
  
          // Adicionar os versículos ao capítulo
          chapters.push({ verses });
        });
  
        // Adicionar livro ao banco de dados
        realm.create('Book', {
          bookName: book.bookName,
          chapters,
        });
      });
    });
  
    console.log('Dados inseridos com sucesso!');
  }
  
  return { exportDb, insertData };
};
