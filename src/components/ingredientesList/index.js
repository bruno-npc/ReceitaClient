import { View, Text, StyleSheet } from "react-native"


export function IngredientesList({data}){
    return(
        <View style={styles.container}>
            <Text style={styles.nomeIngrediente}>{data.nome}</Text>
            <Text>{data.quantidade} {data.medida}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius:4
    },
    nomeIngrediente:{
        fontWeight: 'bold',
        fontSize:16
    }
})