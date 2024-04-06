import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import TodoCategory from './src/components/todoCategory/TodoCategory';
import TodoItem from './src/components/todoItem/TodoItem';
import todoStore from './src/store/todoStore';
import TodoItemMenu from './src/components/todoItemMenu/TodoItemMenu';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  return (
    <View style={{height: "100%"}}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView>
          <View style={styles.todoCategoryGroup}>
            {
              todoStore.categories.map((category) => (
                <TodoCategory
                  key={category.id}
                  id={category.id}
                  title={category.title}
                />
              ))
            }
            <TouchableOpacity 
              activeOpacity={0.6} 
              style={styles.todoCategoryAdd}
            >
              <View style={styles.todoCategoryAddVertical} />
              <View style={styles.todoCategoryAddHorizontal} />
            </TouchableOpacity>
          </View>
          <View style={styles.todoItemGroup}>
            {
              todoStore.categories.find(obj => obj.id === todoStore.activeCategory)?.data.map((category, index) => (
                <TodoItem
                  key={index}
                  id={category.id}
                  title={category.title}
                  text={category.text}
                  pin={category.pin}
                />
              ))
            }
          </View>
        </ScrollView>
        <TouchableOpacity 
          style={styles.todoAddItem} 
          activeOpacity={0.6}>
          <View style={styles.todoAddItemVertical} />
          <View style={styles.todoAddItemHorizontal} />
        </TouchableOpacity>
      </View>
      <TodoItemMenu />
    </View>
  );
}) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingBottom: 10,
  },
  todoItemGroup: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
  todoCategoryGroup: {
    flex: 0,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  todoAddItem: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF800B",
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: "center",
  },
  todoAddItemVertical: {
    position: "absolute",
    alignSelf: "center",
    height: 30,
    width: 2, 
    backgroundColor: "#FFF",
    borderRadius: 2,
  },
  todoAddItemHorizontal: {
    position: "absolute",
    alignSelf: "center",
    width: 30,
    height: 2, 
    backgroundColor: "#FFF",
    borderRadius: 2,
  },
  todoCategoryAdd: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#121212",
    position: "relative",
    width: 40,
    height: 40,
  },
  todoCategoryAddVertical: {
    position: "absolute",
    alignSelf: "center",
    width: 12,
    height: 1, 
    backgroundColor: "#888",
    borderRadius: 2,
  },
  todoCategoryAddHorizontal: {
    position: "absolute",
    alignSelf: "center",
    width: 1,
    height: 12, 
    backgroundColor: "#888",
    borderRadius: 2,
  },
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

export default App;