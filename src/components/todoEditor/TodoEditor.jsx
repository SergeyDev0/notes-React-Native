import React from "react"
import { View, StyleSheet, TouchableOpacity, Image, TextInput, Keyboard } from 'react-native';
import todoStore from "../../store/todoStore";
import { observer } from "mobx-react-lite";

const TodoEditor = observer(() => {
  const [title, setTitle] = React.useState(todoStore.activeItem.title || '');
  const [text, setText] = React.useState(todoStore.activeItem.text || '');

  React.useEffect(() => {
    setTitle(todoStore.activeItem.title || '');
    setText(todoStore.activeItem.text || '');
  }, [todoStore.activeItem.title, todoStore.activeItem.text]);

  function getTitle(text) {
    setTitle(text);
  }

  function getText(text) {
    setText(text);
  }

  return (
    <View style={todoStore.isOpenEditor ? [styles.confirmPanelWrapper, styles.active] : styles.confirmPanelWrapper}>
      <View style={styles.confirmPanel}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            todoStore.closeEditor();
            Keyboard.dismiss();
          }}
        >
          <Image 
            source={require("../../assets/icons/close.png")} 
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            todoStore.confirmEditor(title, text);
            Keyboard.dismiss();
          }}
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
        multiline={true} placeholder="Text" 
        placeholderTextColor={'white'}
        value={text}
        onChangeText={getText}
      />
    </View>
  )
});

const styles = StyleSheet.create({
  confirmPanelWrapper: {
    height: "100%", 
    width: "100%",
    position: "absolute", 
    left: 0, 
    top: 0,
    display: "none",
    backgroundColor: "#000",
  },  
  active: {
    top: 0,
    display: "block",
  },
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
  confirmTitleField: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#000",
  },
  confirmTextField: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    textAlignVertical: "top",
    flexGrow: 1,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#000",
  }
});

export default TodoEditor;
