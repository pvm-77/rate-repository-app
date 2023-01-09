import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import RepositoryList from "./RepositoryList";

import AppBar from "./AppBar";
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "black",
  },
});

const Main = () => {
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <Text color="primary" fontWeight="bold" fontSize="subheading">
          Rate Repository Application
        </Text>
      </View>
      <RepositoryList />
    </>
  );
};
export default Main;
