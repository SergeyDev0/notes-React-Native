import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Haptics from 'expo-haptics';
import todoStore from "../../store/todoStore";

const TodoItem = ({ title, text, pin, id }) => {
  return (
    <TouchableOpacity 
      delayLongPress={500} 
      onPress={() => {}} 
      onLongPress={()=>{
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        todoStore.openMenu(id);
      }} 
      activeOpacity={0.6} 
      style={styles.item}
    >
      <View style={styles.todoContent}>
        <Text 
          style={styles.title}
          numberOfLines={1}>{title}</Text>
        <Text 
          style={styles.description}
          numberOfLines={2}>
            {text}
          </Text>
      </View>
      {
        pin && (
          <View style={styles.todoPanel}>
            <Image style={styles.todoPanelIcon} source={require("../../assets/icons/pin.png")}/>
          </View>
        )
      }
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  item: {
    flex: 0,
    flexDirection: "row",
    gap: 10,
    width: "100%",
    height: "auto",
    backgroundColor: "#121212",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 22,
    borderRadius: 15,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    marginTop: 5,
    color: "#888",
    fontSize: 14,
  },
  todoContent: {
    flexGrow: 1,
  },
  todoPanel: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  todoPanelIcon: {
    width: 18,
    height: 18,
  },
});

export default TodoItem;
