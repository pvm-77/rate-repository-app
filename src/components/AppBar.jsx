import { View, StyleSheet, ScrollView } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";
import theme from "../theme";
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "red",
    display: "flex",
    flexDirection: "row",
    height: 100,
    backgroundColor: theme.colors.appBarBackground,
    alignItems: "center",
  },
  text: {
    paddingTop: 10,
    paddingRight: 10,
    color: "white",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text} fontSize="subheading" fontWeight="bold">
            RepositoryList
          </Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.text} fontSize="subheading" fontWeight="bold">
            SignIn
          </Text>
        </Link>
        <Link to="/a">
          <Text style={styles.text} fontSize="subheading" fontWeight="bold">
            some
          </Text>
        </Link>
        <Link to="/b">
          <Text style={styles.text} fontSize="subheading" fontWeight="bold">
            some2
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
