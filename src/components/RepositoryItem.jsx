import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    profileImageContainer: {
      borderWidth: 1,
      borderBottomColor: "red",
    },
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
    },
    statContainerItems: {
      display: "flex",
      direction: "column",
    },
    repoInformationContainer: {
      marginLeft: 10,
    },
    statsContainer: {
      display: "flex",
      flexDirection: "row",
      marginLeft:80,
      //   justifyContent: "center",
    },


    language:{
        backgroundColor:theme.colors.primary,
        color:'white',
        padding:10,
        borderRadius:2,
        marginTop:10,
        width:90

    }
  });
  console.log(item);
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profile} source={{ uri: item.ownerAvatarUrl }} />
        </View>

        <View style={styles.repoInformationContainer}>
          <View style={styles.profileInformation}>
            <Text color="textPrimary" fontSize="subheading" fontWeight="bold">
              {item.fullName}
            </Text>
            <Text color="textSecondary">{item.description}</Text>

            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainerItems}>
          <Text>{item.stargazersCount}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>

        <View style={styles.statContainerItems}>
          <Text>{item.forksCount}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>

        <View style={styles.statContainerItems}>
          <Text>{item.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>

        <View style={styles.statContainerItems}>
          <Text>{item.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </>
  );
};

export default RepositoryItem;
