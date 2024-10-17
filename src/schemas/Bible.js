// Definição do schema para Versículos
export const VerseSchema = {
  name: 'Verse',
  primaryKey: 'id',
  properties: {
    id: 'int',
    verse: 'string',
    annotation: 'string?',
    first: 'bool',
    last: 'bool',
  },
};

// Definição do schema para Capítulos
export const ChapterSchema = {
  name: 'Chapter',
  properties: {
    verses: 'Verse[]',  // Relacionamento com versículos
  },
};

// Definição do schema para Livros
export const BookSchema = {
  name: 'Book',
  primaryKey: 'bookName',
  properties: {
    bookName: 'string',
    chapters: 'Chapter[]',  // Relacionamento com capítulos
  },
};