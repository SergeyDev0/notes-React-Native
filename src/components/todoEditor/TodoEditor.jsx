import React from "react"
import { View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const TodoEditor = () => {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");

  function getTitle(text) {
    setTitle(text);
  }

  function getText(text) {
    setText(text);
  }

  return (
    <View style={{height: "100%", width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: "#000"}}>
      <View style={styles.confirmPanel}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.confirmPanelButton}
          onPress={() => {todoStore.closeEditor()}}
        >
          <Image 
            source={require("../../assets/icons/close.png")} 
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.confirmPanelButton}
          onPress={() => todoStore.confirmEditor()}
        >
          <Image 
            source={require("../../assets/icons/tick.png")} 
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity>
      </View> 
      <TextInput 
        style={styles.confirmTitleField} 
        multiline={true} placeholder="Title" 
        placeholderTextColor={'white'}
        value={title}
        onChangeText={getTitle}
      />
      <TextInput 
        style={styles.confirmTextField} 
        multiline={true} placeholder="Write a text here..." 
        placeholderTextColor={'white'}
        value={text}
        onChangeText={getText}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  confirmPanel: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingTop: 50,
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  confirmPanelButton: {
    
  },
  confirmTitleField: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 20,
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#000",
  },
  confirmTextField: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 20,
    textAlignVertical: "top",
    flexGrow: 1,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#000",
  }
});

export default TodoEditor;
