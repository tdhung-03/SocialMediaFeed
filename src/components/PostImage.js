import { View, Image, StyleSheet } from "react-native";

const PostImage = ({ imageSource }) => {
  return (
    <View>
      <Image style={styles.postImage} source={imageSource}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  postImage: {
    width: 290,
    height: 180,
    resizeMode: "cover",
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 10,
  },
});
export default PostImage;
