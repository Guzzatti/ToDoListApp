import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Appbar, Checkbox, List, PaperProvider } from "react-native-paper";

export default function App() {
  const [data, setData] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      status: false,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      status: true,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      status: true,
    },
  ]);

  function updateData(id, status) {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, status: status } : item
    );
    setData(updatedData);
  }

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="ToDoList" />
      </Appbar.Header>
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description="Item description"
            onPress={() => updateData(item.id, !item.status)}
            left={(props) => (
              <Checkbox
                status={item.status ? "checked" : "unchecked"}
                onPress={() => {
                  updateData(item.id, !item.status);
                }}
              />
            )}
          />
        )}
        keyExtractor={(item) => item?.id}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    marginHorizontal: 10,
  },
});
