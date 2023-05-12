import {View, Text, StyleSheet} from 'react-native'

export function Search(){
    return(
        <View style={style.container}>
            <Text>Página Search</Text>
        </View>
    )
}

//Ainda acho estranho o css ficar dentro do arquivo .js, mas da mesma forma que é feito no reactjs
//Vou alterar o projeto para fazer import do css
//duvído que funcione por precisar importar o StyleSheet e fazer a personalização na tela
const style = StyleSheet.create({
    container:{
        backgroundColor: 'red'
    }
})