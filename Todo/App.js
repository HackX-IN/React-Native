import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Keyboard, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import Task from './tsk';


export default function App() {



  const [task,setTask]=useState();
  const [taskitems,setTaskitems]=useState([]);


const Addtask=()=>{
  Keyboard.dismiss()
setTaskitems([...taskitems,task])
setTask(null);
}

const completeTask=(index)=>{
  let itemsCopy=[...taskitems];
  itemsCopy.splice(index,1);
  setTaskitems(itemsCopy);
}

  return (
    <View style={styles.container}>
<View style={styles.textwrapper}>
<Text style={styles.text}>To-Do List </Text>

   <View style={styles.items}>

    {
      taskitems.map((item,index)=>{
        return (
        <TouchableOpacity  key={index} onPress={()=>completeTask(index)}>
           <Task text={item}/>
        </TouchableOpacity>)
      })
    }
    {/* <Task text="task1"/>
    <Task text="task2"/> */}
   </View>
    </View>


    <KeyboardAvoidingView behavior={Platform.OS ==='ios'?"padding":"height"} style={styles.keyword}>

<TextInput style={styles.input} placeholder={"write a task"} value={task} onChangeText={text=>setTask(text)}/>
<TouchableOpacity onPress={Addtask}>
 <View style={styles.addwrapper}>
 <Text style={styles.addtext}>+</Text>
 </View>
</TouchableOpacity>

    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:"#E8EAED"
  },
  textwrapper:{
    paddingTop:70,
    paddingHorizontal:20,
  },
  text:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30
  },
  keyword:{
    position:'absolute',
    bottom:60,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'

  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250,

  },
  addwrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:"#C0C0C0",
    borderWidth:1,
  }

});
