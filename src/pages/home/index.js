import { useState, useEffect } from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native'
import { Logo } from '../../components/logo'
import {Ionicons} from '@expo/vector-icons'
import api from '../../services/api'
import { ReceitasList } from '../../components/receitasList'

export function Home(){
    const[inputValue, setInputValue] = useState("")
    const[receitas, setReceitas] = useState([])

    //useEffect usado no React Native para lidar com tarefas assíncronas
    //O useEffect é executado depois que a renderização do componente é concluída.
    //Nesse caso usamos useEffect quando iniciamos a aplicação, para preencher a tela de receitas
    useEffect(() => {
        async function buscarApi() {
            try {
                const response = await api.get();
                setReceitas(response.data)
            } catch (error) {
                console.error(error);
            }
            }
        buscarApi();
        //[] Significa que isso só vai ser executado uma unica vez
      }, []);

    function handleSearch(){
        console.log(inputValue)
    }

    return(
        <SafeAreaView style={style.container}>
            <Logo/>
            <Text style={style.logoTexto}>Descubra o mundo de possibilidades com nossas receitas</Text>

            <View style={style.formSearch}>
                <TextInput
                placeholder='Digite o nome da comida...'
                style={style.searchText}
                value={inputValue}
                //Função anonima para pegar o valor digitado e atribuir ao const do usestate
                onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' color='#4CBE6C' size={28}/>
                </TouchableOpacity>
            </View>

            <FlatList
                //Listagem de receitas
                data={receitas}
                keyExtractor={(itemReceita) => String(itemReceita.id)}
                //Por padrão precisa usar 'item' tentei itemReceita e dava erro de não ter variaveis definidas no json
                //Passando os dados para o componente ReceitasList que vai ser renderizado varias vezes.
                renderItem={({item}) => <ReceitasList data={item}/>}
                showsVerticalScrollIndicator={false}
            />

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F3F9FF',
        paddingTop:36,
        paddingStart:14,
        paddingEnd:14
    },
    logoTexto:{
        fontSize:20,
        fontWeight:'bold',
        color:'#0e0e0e'
    },
    formSearch:{
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#ECECEC',
        width:'100%',
        borderRadius: 8,
        marginTop:16,
        marginBottom:16,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    searchText:{
        width:'90%',
        maxWidth:'90%',
        height:54
    }
})