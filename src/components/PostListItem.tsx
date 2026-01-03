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
    <View style={{ height: height - 80 }}>
      <VideoView
        style={{ flex: 1 }}
        player={player}
        contentFit="cover"
        nativeControls={false}
      />

      <View style={styles.interactionBar}>
        <TouchableOpacity
          style={styles.interactionButton}
          onPress={() => console.log("Like Pressed")}
        >
          <Ionicons name="heart" size={33} color="#fff" />
          <Text style={styles.interactionTxt}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.interactionButton}
          onPress={() => console.log("comment Pressed")}
        >
          <Ionicons name="chatbubble" size={33} color="#fff" />
          <Text style={styles.interactionTxt}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.interactionButton}
          onPress={() => console.log("share Pressed")}
        >
          <Ionicons name="arrow-redo" size={33} color="#fff" />
          <Text style={styles.interactionTxt}>20</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.avatar}
          onPress={() => console.log("profile Pressed")}
        >
          <View>
            <Text style={styles.avatarTxt}>L</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.videoInfo}>
        <Text style={styles.username}>Jesus</Text>
        <Text style={styles.desscription}>Jesus Loves You</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  interactionBar: {
    position: "absolute",
    right: 20,
    bottom: 20,
    alignItems: "center",
    gap: 25,
  },
  interactionButton: {
    alignItems: "center",
  },
  interactionTxt: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatarTxt: {
    fontSize: 25,
  },
  videoInfo: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 100,
    gap: 5,
  },
  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  desscription: {
    color: "#fff",
    fontSize: 14,
  },
});
