import { View, StyleSheet, Text, Image } from "react-native";

const UserInfo = ({ avatarSource, username }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={avatarSource}></Image>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
  },
  avatar: {},
  username: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
  },
});
export default UserInfo;
