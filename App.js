import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FaceItem from "./Compenen/FaceItem";
import react from "react";
export default function App() {
  return (
    <View style={styles.container}>
      <FaceItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
