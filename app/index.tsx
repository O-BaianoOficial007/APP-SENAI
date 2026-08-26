import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'}

export default function Home() {
  return (
    <View style={s.container}>
      <ImageBackground source={require('../assets/images/taçaCopa1.png')} resizeMode="cover" style={s.image}/>
      <Image style={s.logo} source={require('../assets/images/logoCopa.png')}/>
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
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 400,
    marginHorizontal: 50,
    marginBottom: 50
  },
  btnText:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30
  },
  logo: {
    marginHorizontal: 100,
    marginTop: 50
  },

});
