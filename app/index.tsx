import HelloWorldText from "@/Components/HelloWorldText";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#3389F2",
      }}
    >
      <HelloWorldText></HelloWorldText>
    </View>
  );
}
