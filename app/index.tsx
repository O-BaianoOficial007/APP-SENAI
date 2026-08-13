import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'}

export default function Home() {
  return (
    <View style={s.container}>
      <ImageBackground source={image} resizeMode="cover" style={s.image}/>
      <Text>Index</Text>
    </View>
  );
}
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
