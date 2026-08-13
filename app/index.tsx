import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'}

export default function Home() {
  return (
    <View style={s.container}>
      <ImageBackground source={require('../assets/images/image2.png')} resizeMode="cover" style={s.image}/>
      <TouchableOpacity style={s.btn}>
        <Text style={s.btnText}>ENTRAR</Text>
      </TouchableOpacity>
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
  btn: {
    position: 'absolute',
    bottom: 100,
    left: 50,
  },
  btnText:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30
  }
});
