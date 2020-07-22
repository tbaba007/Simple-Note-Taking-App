import React from 'react';


const EditNote=()=>{
    return (
        <SafeAreaView>
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
        </SafeAreaView>
    )
}

export default EditNote;