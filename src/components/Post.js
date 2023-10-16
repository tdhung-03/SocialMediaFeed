import { View, Text, StyleSheet } from "react-native";
import UserInfo from "./UserInfo";
import PostText from "./PostText";
import PostImage from "./PostImage";
import Interaction from "./Interaction";

const Post = ({ avatarSource, username, text, imageSource }) => {
  return (
    <View style={styles.container}>
      <UserInfo avatarSource={avatarSource} username={username} />
      <PostText text={text} />
      <PostImage imageSource={imageSource} />
      <Interaction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
  },
  text: {
    fontSize: 50,
  },
});

export default Post;
