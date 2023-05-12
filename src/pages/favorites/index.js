import {View, Text, StyleSheet} from 'react-native'

export function Favorite(){
    return(
        <View style={style.container}>
            <Text>Página favoritos</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: 'yellow'
    }
})