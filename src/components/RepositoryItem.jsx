import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { statModifier } from "../utils/statFormat";
const styles = StyleSheet.create({
  profileImageContainer: {},
  profile: {
    width: 80,
    height: 80,
  },
  profileInformation: {
    // paddingLeft:10,
    marginLeft: 10,
  },

  itemContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.colors.itemContainerBackground,
  },

  statContainerItems: {
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 15,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  repoInformationContainer: {
    marginLeft: 10,
  },
  fullname: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  description: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: "white",
    padding: 10,
    borderRadius: 2,
    marginTop: 10,
    width: 90,
  },
  gap10: {
    paddingBottom: 10,
  },
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    backgroundColor: "white",
  },
});
const Statistics = ({ item }) => {
  return (
    <View style={styles.statContainerItems}>
      <Text
        style={styles.gap10}
        color="textPrimary"
        fontSize="subheading"
        fontWeight="bold"
      >
        {item.ratingAverage}
      </Text>
      <Text color="textSecondary">Rating</Text>
    </View>
  );
};
const RepositoryItem = ({ item }) => {
 
  console.log(item);
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profile} source={{ uri: item.ownerAvatarUrl }} />
        </View>

        <View style={styles.repoInformationContainer}>
          <View style={styles.profileInformation}>
            <Text
              style={styles.fullname}
              color="textPrimary"
              fontSize="subheading"
              fontWeight="bold"
            >
              {item.fullName}
            </Text>
            <Text style={styles.description} color="textSecondary">
              {item.description}
            </Text>

            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainerItems}>
          <Text
            style={styles.gap10}
            color="textPrimary"
            fontSize="subheading"
            fontWeight="bold"
          >
            {statModifier(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>

        <View style={styles.statContainerItems}>
          <Text
            style={styles.gap10}
            color="textPrimary"
            fontSize="subheading"
            fontWeight="bold"
          >
            {statModifier(item.forksCount)}
          </Text>
          <Text color="textSecondary">Forks</Text>
        </View>

        <View style={styles.statContainerItems}>
          <Text
            style={styles.gap10}
            color="textPrimary"
            fontSize="subheading"
            fontWeight="bold"
          >
            {item.reviewCount}
          </Text>
          <Text color="textSecondary">Reviews</Text>
        </View>

        <View style={styles.statContainerItems}>
          <Text
            style={styles.gap10}
            color="textPrimary"
            fontSize="subheading"
            fontWeight="bold"
          >
            {item.ratingAverage}
          </Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </>
  );
};

export default RepositoryItem;
