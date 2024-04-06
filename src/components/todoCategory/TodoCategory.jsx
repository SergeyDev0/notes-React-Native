import React from "react"
import { StyleSheet, Text, TouchableOpacity, View  } from "react-native";
import todoStore from "../../store/todoStore";
import { observer } from "mobx-react-lite";

const TodoCategory = observer(({ title, id }) => {
  return (
    <TouchableOpacity 
      onPress={() => todoStore.getActiveCategory(id)}
      activeOpacity={0.6} 
      style={[
        styles.todoCategoryButton,
        id === todoStore.activeCategory && styles.active,
      ]}>
      <Text 
        style={[
          styles.todoCategoryText,
        id === todoStore.activeCategory && styles.activeText,
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  todoCategoryButton: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 20,
    backgroundColor: "#121212",
    color: "#888"
  },
  active: {
    backgroundColor: "#FF800B",
    color: "#fff",
  },
  todoCategoryText: {
    color: "#888",
  },
  activeText: {
    color: "#fff",
  },
});

export default TodoCategory;
