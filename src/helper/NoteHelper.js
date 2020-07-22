import AsyncStorage from '@react-native-community/async-storage';

const saveNote=(id,note)=>{

    return AsyncStorage.setItem(id,note);
}

const getNoteById=id=>{
    return AsyncStorage.getItem(id)
}

const deleteNoteById=id=>{
    return AsyncStorage.removeItem(id)
}

const getAll=()=>{
    return AsyncStorage.getAllKeys();
}

export{
    saveNote,
    getNoteById,
    deleteNoteById,
    getAll
}