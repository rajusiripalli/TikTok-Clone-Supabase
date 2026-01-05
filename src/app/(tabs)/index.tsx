import PostListItem from "@/components/PostListItem";
import { Text, View, FlatList } from "react-native";
import posts from "assets/data/posts.json";

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem postItem={item} />}
      />
    </View>
  );
}
