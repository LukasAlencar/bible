
  export async function insertBooks(realmInstance, booksData) {
    realmInstance.write(() => {
      booksData.forEach(book => {
        realmInstance.create('Book', {
          _id: new ObjectId(), // Gerar um novo ObjectId para cada livro
          bookName: book.bookName,
          chapters: book.chapters.map(chapterArray =>
            chapterArray.map(chapter => ({
              verse: chapter.verse,
              annotation: chapter.annotation || null // Usar null caso não haja anotação
            }))
          )
        });
      });
    });
  }
  