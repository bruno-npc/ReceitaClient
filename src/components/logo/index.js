import {View, Text, StyleSheet} from 'react-native'

export function Logo(){
    return(
        <View style={style.logoArea}>
            <Text style={style.logo}>Receita Veg</Text>
        </View>
    )
}

const style = StyleSheet.create({
    logoArea:{
        backgroundColor:'#4CBE6C',
        borderRadius: 10,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        padding:8,
        paddingLeft:16,
        paddingRight: 16,
        borderTopRightRadius:8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius:8,
        borderBottomRightRadius:36,
        marginBottom:8
    },
    logo:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
    }
})