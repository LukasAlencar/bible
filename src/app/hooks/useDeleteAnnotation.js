import { useRealm } from '@realm/react';

export const useDeleteAnnotation = () => {
    const realm = useRealm();

    const deleteAnnotation = (verseNum) => {
        realm.write(() => {
            const versicle = realm.objectForPrimaryKey('Verse', verseNum);

            if (versicle) {
                // Deleta a anotação do versículo
                versicle.annotation = '';
                console.log('Anotação deletada com sucesso!');
            } else {
                console.log('Versículo não encontrado.');
            }
        });
    };

    return { deleteAnnotation };
};
