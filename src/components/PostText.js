import { View, Text, StyleSheet } from "react-native";

const PostText = ({ text }) => {
  return (
    <View>
      <Text style={styles.mainText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    marginBottom: 10,
  },
});

export default PostText;
