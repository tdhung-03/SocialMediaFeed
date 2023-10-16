import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Interaction = () => {
  const [likes, setLikes] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);
  const [comments, setComments] = React.useState(0);
  const [shares, setShare] = React.useState(0);

  const handleLikePress = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };
  const handleCommentPress = () => {};
  const handleSharePress = () => {};
  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.numberText}>{likes} Likes</Text>
        <Text style={styles.numberText}>{comments} Comments</Text>
        <Text style={styles.numberText}>{shares} Shares</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.bottom}>
        {/* Like button */}
        <Pressable onPress={handleLikePress}>
          <Text style={styles.buttonText}>{isLiked ? "Unlike" : "Like"}</Text>
        </Pressable>
        {/* Comment button */}
        <Pressable onPress={handleCommentPress}>
          <Text style={styles.buttonText}>Comment</Text>
        </Pressable>
        {/* Share button */}
        <Pressable onPress={handleSharePress}>
          <Text style={styles.buttonText}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  line: {
    borderBottomColor: "#e1ebfa", // Color of the line
    borderBottomWidth: 1, // Thickness of the line
    marginVertical: 10, // Adjust vertical spacing
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  numberText: {
    fontSize: 12,
    color: "grey",
  },
});
export default Interaction;
