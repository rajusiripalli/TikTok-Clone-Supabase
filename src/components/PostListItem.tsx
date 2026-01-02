import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { Ionicons } from "@expo/vector-icons";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function PostListItem() {
  const { height } = Dimensions.get("window");
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });
  return (
    <View style={{ height }}>
      <VideoView
        style={{ flex: 1 }}
        player={player}
        contentFit="cover"
        nativeControls={false}
      />

      <View>
        <TouchableOpacity
          style={{}}
          onPress={() => console.log("Like Pressed")}
        >
          <Ionicons name="heart" size={33} color="#fff" />
          <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{}}
          onPress={() => console.log("comment Pressed")}
        >
          <Ionicons name="chatbubble" size={33} color="#fff" />
          <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{}}
          onPress={() => console.log("share Pressed")}
        >
          <Ionicons name="arrow-redo" size={33} color="#fff" />
          <Text>20</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{}}
          onPress={() => console.log("profile Pressed")}
        >
          <View>
            <Text>L</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  interactionBar: {
    position: "absolute",
  },
});
