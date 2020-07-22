import React from 'react';
import {NavigationAction} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView,View} from 'react-native';
import NewNote from '../components/NewNote';
import NoteList from '../components/NoteList';
const stack= createStackNavigator();
const Nav=()=>{
    return (
            <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="NoteList" component={NoteList}/>
                <stack.Screen name="New Note" component={NewNote}/>
                {/* <stack.Screen name="EditNote" component={EditNote}/> */}
            </stack.Navigator>
            </NavigationContainer>        
    )
}

export default Nav;
