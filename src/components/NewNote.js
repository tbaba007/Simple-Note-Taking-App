import React,{useState} from 'react'
import {SafeAreaView,
        Text,
        TouchableHighlight,
        ScrollView,
        Alert,
        TextInput} from 'react-native';
import {Card} from 'react-native-elements';
import {style} from '../assets/styles';
import {saveNote,getNoteById} from '../helper/NoteHelper';
import {AppMessages} from '../utils/AppMessages';

const NewNote=(props)=> {
     const [title,setTitle]=useState('');
     const [note,setNote]=useState('');

     const isNoteExists=()=>{
       return  getNoteById(title.trim())
     }
     const clearFields=()=>{
         setTitle('');
         setNote('');
     }

     const save=()=>{
        if(title.trim().length<1)
        return Alert.alert(AppMessages.headers.error,'Title Required!')
        else if(note.trim().length<1)
        return Alert.alert(AppMessages.headers.error,'Note Required!')
        else
        {
           const val= isNoteExists(title).then(response=>{
                if(!response)
              {
                  saveNote(title.trim(),note.trim())
                  Alert.alert(AppMessages.headers.success,
                    'Note saved successfully!Do you want to add another one?',
                  [{
                      text:'No',
                      onPress:props.navigation.pop()
                  },{
                      text:'Yes',
                      onPress:clearFields
                      
                  }])
              }
              else
              Alert.alert(AppMessages.headers.error,'Note Title Already Exists')
            })
        }
    }
    return (
        <Card>
            <ScrollView>
            <TextInput
             placeholder="Enter Note Title"
             value={title}
             onChangeText={(title)=>setTitle(title)}
             style={style.TextInput}/>


            <TextInput placeholder="Enter Note"
            numberOfLines={10}
            multiline
            value={note}
            onChangeText={(note)=>setNote(note)}
            style={[style.TextInput,{textAlignVertical: 'top'}]}/>

            <TouchableHighlight
             style={style.Savebutton}
             onPress={save}>
                <Text style={style.ButtonText}>Save</Text>
            </TouchableHighlight>


            </ScrollView>
        </Card>
    )
}

export default NewNote
