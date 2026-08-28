import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList} from "react-native";
import { router } from "expo-router";
import dados from '@/assets/constants/mock2'
import { Item } from '@/components/item'


export default function Apresentacao(){
    return(
        <View style={s.screen}>
            <Text>Últimas Copas</Text>
            <View>
                <FlatList data={dados} renderItem={({item}) => (
                    <Item picture={item.image} title={item.title} text={item.text} />
                )}>
                </FlatList>
            </View>
            <View style={s.nav}> 
                <TouchableOpacity onPress={() => router.push('/card')}>
                    <Image source={require('../assets/icons/setaE.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/contato')}>
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
    }
})