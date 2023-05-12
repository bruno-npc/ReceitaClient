import { View, Text, StyleSheet } from "react-native"


export function InstrucoesList({data, index}){
    return(
        <View style={styles.container}>
            <Text style={styles.index}>{index+1} - </Text>
            <Text style={styles.instrucao}>{data.instrucao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    index:{
        fontWeight: 'bold',
        fontSize: 15,
        width: 20
    },
    instrucao:{
        lineHeight: 20,
        fontSize: 15,
        marginRight: 20,
        marginBottom: 8
    }
})