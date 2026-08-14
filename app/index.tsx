import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'}

export default function Home() {
  return (
    <View style={s.container}>
      <ImageBackground source={require('../assets/images/image2.png')} resizeMode="cover" style={s.image}/>
      <Image style={s.logo} source={require('../assets/images/nba.png')}/>
      <TouchableOpacity style={s.btn} onPress={() => router.push('/card')}>
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
    left: 40,
    backgroundColor: '#D9D9D9',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 10
  },
  btnText:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30
  },
  logo: {
    position: 'absolute',
    top: 50,
    left: 70
  },

});
