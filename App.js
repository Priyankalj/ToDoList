import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const image = {
  uri: "https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=pexels-rahul-pandit-1212487.jpg&fm=jpg",
};
const App = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handler = () => {
    setTask((prev) => {
      return [...prev, { id: Math.random(), task: input }];
    });
    setInput("");
  };
  const inputchangeHandler = (value) => {
    setInput(value);
  };
  console.log(task);
  const Item = ({ title, id }) => {
    const imageHandler = (id) => {
      const filteredItems = task.filter((eachtask) => eachtask.id !== id);
      setTask(filteredItems);
    };
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          marginBottom: 8,
        }}
      >
        <View style={{ justifyContent: "center", paddingLeft: 10 }}>
          <Text>{title}</Text>
        </View>
        <View style={{ padding: 10 }}>
          <TouchableOpacity onPress={imageHandler.bind(null, id)}>
            <Image
              style={{ height: 30, width: 25 }}
              source={{
                uri: "https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png ",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={{ fontWeight: "600" }}>New Todo:</Text>
        <View style={styles.align}>
          <View style={{ flex: 1 }}>
            <TextInput
              style={{ borderWidth: 1 }}
              onChangeText={inputchangeHandler}
              value={input}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={handler} disabled={!input}>
              <Text>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={task}
            renderItem={({ item }) => <Item title={item.task} id={item.id} />}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />
        </View>
        <Text> </Text>
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    paddingTop: 30,
    padding: 30,
  },
  input: {
    borderWidth: 1,
    height: 40,
    width: "50%",
  },
  align: {
    flexDirection: "row",
    paddingTop: 10,
  },
  button: {
    backgroundColor: "pink",
    marginLeft: 20,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    marginTop: 20,
  },
});
