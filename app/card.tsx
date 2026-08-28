import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { router } from "expo-router";
import dados from '@/assets/constants/mock'
import { Item } from '@/components/item'


export default function Card(){
    return(
       <View style={s.screen}>
            <TouchableOpacity onPress={() => router.push('/')} style={s.button}>
                <Text>Sair</Text>
            </TouchableOpacity>
            <FlatList data={dados} renderItem={({item}) => (
                    <Item picture={item.image} title={item.title} text={item.text} />
                )}>
            </FlatList>
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
    screen:{
        flex: 1,
    },
    button:{
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#054A91',
        width: 60,
        marginHorizontal: 170,
        borderRadius: 3,
        padding: 6
    }
})