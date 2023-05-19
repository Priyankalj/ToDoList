// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Image,
// } from "react-native";

// const image = {
//   uri: "https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=pexels-rahul-pandit-1212487.jpg&fm=jpg",
// };
// const App = () => {
//   const [input, setInput] = useState("");
//   const [task, setTask] = useState([]);

//   const handler = () => {
//     setTask((prev) => {
//       return [...prev, { id: Math.random(), task: input }];
//     });
//     setInput("");
//   };
//   const inputchangeHandler = (value) => {
//     setInput(value);
//   };
//   console.log(task);
//   const Item = ({ title, id }) => {
//     const imageHandler = (id) => {
//       const filteredItems = task.filter((eachtask) => eachtask.id !== id);
//       setTask(filteredItems);
//     };
//     return (
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           borderWidth: 1,
//           marginBottom: 8,
//         }}
//       >
//         <View style={{ justifyContent: "center", paddingLeft: 10 }}>
//           <Text>{title}</Text>
//         </View>
//         <View style={{ padding: 10 }}>
//           <TouchableOpacity onPress={imageHandler.bind(null, id)}>
//             <Image
//               style={{ height: 30, width: 25 }}
//               source={{
//                 uri: "https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png ",
//               }}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.innercontainer}>
//         <Text style={{ fontWeight: "600" }}>New Todo:</Text>
//         <View style={styles.align}>
//           <View style={{ flex: 1 }}>
//             <TextInput
//               style={{ borderWidth: 1 }}
//               onChangeText={inputchangeHandler}
//               value={input}
//             />
//           </View>
//           <View style={styles.button}>
//             <TouchableOpacity onPress={handler} disabled={!input}>
//               <Text>ADD</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View>
//           <FlatList
//             data={task}
//             renderItem={({ item }) => <Item title={item.task} id={item.id} />}
//             keyExtractor={(item) => item.id}
//             style={styles.list}
//           />
//         </View>
//         <Text> </Text>
//       </View>
//     </View>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   innercontainer: {
//     paddingTop: 30,
//     padding: 30,
//   },
//   input: {
//     borderWidth: 1,
//     height: 40,
//     width: "50%",
//   },
//   align: {
//     flexDirection: "row",
//     paddingTop: 10,
//   },
//   button: {
//     backgroundColor: "pink",
//     marginLeft: 20,
//     width: 50,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   list: {
//     marginTop: 20,
//   },
// });

// import React from "react";
// import {
//   View,
//   FlatList,
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   Pressable,
// } from "react-native";
// const DATA = [
//   {
//     id: "01",
//     name: "Bank Acc",
//   },

//   {
//     id: "02",
//     name: "Cash",
//   },
//   {
//     id: "03",
//     name: "Credit Card",
//   },
//   {
//     id: "04",
//     name: "Debit Card",
//   },
//   {
//     id: "05",
//     name: "Net Banking",
//   },
//   {
//     id: "06",
//     name: "Wallet",
//   },
// ];
// const onPressFunction = ({ item }) => {
//   console.log(item.name);
// };
// const Priya = ({ name }) => (
//   <View style={styles.item}>
//     <Pressable onPress={onPressFunction}>
//       <Text style={styles.trans}>{name}</Text>
//     </Pressable>
//   </View>
// );
// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => <Priya name={item.name} id={item.id} />}
//         keyExtractor={(item) => item.id}
//         numColumns={3}
//         // columnWrapperStyle={{ justifyContent: "space-between" }}
//       />
//     </SafeAreaView>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0F1621",
//     // justifyContent: "center",
//     alignItems: "center",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   item: {
//     // padding: 10,
//     // fontSize: 15,
//     // marginTop: 5,
//     marginTop: 35,
//     // alignItems: "center",

//     // justifyContent: "space-around",
//     // backgroundColor: "red",
//     // justifyContent: "center",
//     width: 110,
//   },
//   trans: {
//     borderWidth: 1,
//     // alignItems: "center",
//     // justifyContent: "space-around",
//     color: "#6E7985",
//     borderColor: "#6E7985",
//     // alignItems: "center",
//     borderRadius: 5,
//     // justifyContent: "center",
//     // padding: 5,
//   },
// });

// import React from "react";
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
// } from "react-native";
// const DATA = [
//   {
//     id: "02",
//     name: "UPI",
//     uri: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg ",
//   },
//   {
//     id: "032",
//     name: "Bank Acc",
//     uri: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg ",
//   },
//   {
//     id: "012",
//     name: "Credit Card",
//     uri: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg ",
//   },
//   {
//     id: "082",
//     name: "Debit Card",
//     uri: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg ",
//   },
//   {
//     id: "064",
//     name: "Wallet",
//     uri: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg ",
//   },
//   {
//     id: "82",
//     name: "Cash",
//     uri: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg ",
//   },
// ];
// const Item = ({ title, image }) => {
//   return (
//     <View style={styles.stupid}>
//       <TouchableOpacity>
//         <Image
//           style={{ height: 100, width: 100 }}
//           source={{
//             uri: image,
//           }}
//         />
//         <Text style={{ color: "black" }}>{title}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.innercontainer}>
//         <FlatList
//           data={DATA}
//           renderItem={({ item }) => {
//             console.log(item);
//             return <Item title={item.name} image={item.uri} />;
//           }}
//           keyExtractor={(item) => item.id}
//           numColumns={3}
//           columnWrapperStyle={{
//             justifyContent: "space-between",
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 150,
//     // paddingHorizontal: 20,
//     // backgroundColor: "aqua",
//   },
//   stupid: {
//     borderWidth: 1,
//     // width: 110,
//     // textAlign: "center",
//     alignItems: "center",
//     height: 30,
//     margin: 14,
//     borderRadius: 5,
//     paddingTop: 3,
//     color: "#6E7985",
//     borderColor: "#6E7985",
//   },
// });

// import React from "react";
// import { View, Text } from "react-native";
// const App = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       <View style={{ margin: 50, borderWidth: 1 }}>
//         <Text>sljdjfnsndjn</Text>
//       </View>
//     </View>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/550?api_key=caf684f8d5eb05a0edd769a569cb8295"
        );
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(data.production_companies[5].name);

  return (
    <View style={{ flex: 1 }}>
      {data ? (
        <Text style={{ color: "blue" }}>{data.data}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MyComponent;
