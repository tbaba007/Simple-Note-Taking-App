import React,{useState,useEffect} from 'react'
import {SafeAreaView,
        FlatList,
        View,
        StyleSheet,
        Alert,
        Text,
        TouchableHighlight,
        } from 'react-native';
import {Card,Icon,Divider} from 'react-native-elements';
import {AppMessages} from '../utils/AppMessages';
import {saveNote,deleteNoteById,getAll,getNoteById} from '../helper/NoteHelper';
import {style} from '../assets/styles';


const NoteList=(props)=> {
    const {navigation}=props;
    console.log(navigation);
    let [noteList,setNoteList]=useState([]);
    const [successid,setSucessid]=useState(0)
    const fetchNotes=()=>{
        getAll().then(response=>{
            response.map(item=>{
          
                getNoteById(item).then(ret=>{
                    
                    setNoteList(arr=>[...arr,{title:item,note:ret}]);
                })
            })
        })
    }

    useEffect(()=>{
        let mount=true;
        fetchNotes();
        return ()=>{
            mount=false;
        }
    },[successid])

    const ListHeader=()=>{
        return(
            <View>
                <TouchableHighlight 
                style={style.AddButton}
                onPress={()=>navigation.navigate('New Note',{resetNoteList})}>
                    <Text style={style.ButtonText}>Add</Text>
                </TouchableHighlight>
                
            </View>
        )
    }

    const resetNoteList=()=>{
        noteList.length=0;
        setSucessid(Math.random(20000))
    }


    const deleteNote=(id)=>{
        Alert.alert(AppMessages.headers.warning,'Are you sure you want to delete?',
        [{
            text:'No'
        },{
            text:'Yes',
            onPress:()=>{
                deleteNoteById(id).then(response=>{
                    Alert.alert(AppMessages.headers.success,'Note deleted successfully!')
                   resetNoteList();
                })
               
            }
        }])
        
    }

    const editNote=(item)=>{
        navigation
    }
    const RenderItem=(item)=>{
        const {title,note}=item.item;
        return (
                <View style={{flexDirection:'column'}}>
                     <View>
                         <TouchableHighlight>
                         <Text style={{marginTop:15}}>{title}</Text>
                         </TouchableHighlight>
                     </View>
                     <View style={{marginTop:-15,alignItems:'flex-end'}}>
                         <TouchableHighlight 
                          underlayColor="transparent"
                          onPress={()=>deleteNote(title)}>
                         <Icon name="delete" iconStyle={{color:'maroon'}}/>
                         </TouchableHighlight>
                     </View>
                    <View style={{marginTop:-25,marginRight:30,alignItems:'flex-end'}}>
                         <TouchableHighlight>
                         <Icon name="edit" iconStyle={{color:'maroon'}}/>
                         </TouchableHighlight>
                    </View>
                </View>
                
               )
    }

    const EmptyComponent=()=>{
        return <View><Text>No Note Found!</Text></View>
    }

    const ItemSeparator=()=>{
        return <Divider style={{backgroundColor:'maroon',marginTop:10}}/>
    }
    return (
        <SafeAreaView>
            <Card>
                <FlatList
                data={noteList}
                renderItem={(item)=><RenderItem {...item}/>}
                keyExtractor={data=>data.title}
                ListEmptyComponent={()=><EmptyComponent/>}
                ListHeaderComponent={()=><ListHeader/>}
                ItemSeparatorComponent={()=><ItemSeparator/>}
                />
            </Card>
        </SafeAreaView>
    )
}

export default NoteList;
