import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";


export default function Card(){
    return(
       <View>
        <TouchableOpacity onPress={() => router.push('/')}>
            <Text>Sair</Text>
        </TouchableOpacity>
        <View style={s.nav}>
            <TouchableOpacity onPress={() => router.push('/contato')}>
                <Image source={require('../assets/icons/setaE.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/unity')}>
                <Image source={require('../assets/icons/setaD.png')}/>
            </TouchableOpacity>
        </View>
       </View>
    )
}
const s = StyleSheet.create({
    nav:{
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#D9D9D9',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20
    },
})