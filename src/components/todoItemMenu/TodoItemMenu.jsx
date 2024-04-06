import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, TouchableWithoutFeedback, Image } from "react-native";
import { observer } from "mobx-react-lite";
import todoStore from "../../store/todoStore";

const TodoItemMenu = observer(() => {
  return (
    <TouchableOpacity 
      activeOpacity={1} 
      style={todoStore.isOpenMenu ? [styles.menuWrapper, styles.active] : styles.menuWrapper}
      onPress={() => todoStore.closeMenu()}
    >
      <TouchableWithoutFeedback>
        <View style={styles.menu}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              todoStore.togglePin();
              todoStore.closeMenu();
              todoStore.sortCategory();
            }}
          >
          <Image style={{width: 20, height: 20}} source={require("../../assets/icons/pin-w.png")} />
            <Text style={styles.menuItemText}>Pin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image style={{width: 20, height: 20}} source={require("../../assets/icons/edit.png")} />
            <Text style={styles.menuItemText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{...styles.menuItem, borderBottomWidth: 0}}
            onPress={() => todoStore.deleteItem()}
          >
            <Image style={{width: 20, height: 20}} source={require("../../assets/icons/delete.png")} />
            <Text style={{...styles.menuItemText, color: "#fd4346"}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  menuWrapper: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,.6)",
    width: "100%",
    height: "100%",
    top: "100%",
    left: 0,
    flexDirection: "row",
    alignItems: "flex-end",
  },  
  active: {
    top: "0",
  },
  menu: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 0,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 25,
    paddingBottom: 25, 
    borderBottomWidth: 1,
    borderBottomColor: "#7e7e7e",
  },
  menuItemText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default TodoItemMenu;
