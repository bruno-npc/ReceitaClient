import {View, Image, Text, StyleSheet, Pressable, ScrollView, Modal, Share} from 'react-native'
import { useLayoutEffect, useState } from 'react';
import { useRoute , useNavigation} from '@react-navigation/native'
import { Entypo, AntDesign, Feather} from '@expo/vector-icons'

import { IngredientesList } from '../../components/ingredientesList';
import { InstrucoesList } from '../../components/instrucoesList';

import { VideoView } from '../../components/video';

export function Detail(){
    const route = useRoute();
    const navigation = useNavigation();
    const [mostrarVideo, setMostrarVideo] = useState(false);

    //Mudar nome da página, o padrão é Detalhes da receita, que esta definido no stackRouts
    useLayoutEffect(() => {
        navigation.setOptions({
            //if ternario caso não tenha nome no data
            title: route.params?.data ? route.params?.data.nome : "Detalhes da receita",
            headerRight: () => (
                <Pressable>
                    <Entypo name='heart' size={28} color='#FF4141'/>
                </Pressable>
                
            )
        })
    }, [])


    function openVideo(){
       setMostrarVideo(true);
    }

    async function compartilharReceita(){
        try {
            await Share.share({
                uri: '',
                message:`Receita: ${route.params?.data.nome}`
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        //ScrollView permite rolar a página
        <ScrollView contentContainerStyle={{paddingBottom:14}} style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable onPress={openVideo}>
                <View style={styles.iconeVideo}>
                    <AntDesign name='playcircleo' size={48} color={'#FAFAFA'}/>
                </View>
                
                <Image
                    source={{uri : route.params?.data.imagemUrl}}
                    style={styles.imagemUrl}
                />
            </Pressable>

            <View style={styles.viewDetalhes}>
                <View>
                    <Text style={styles.titulo}>{route.params?.data.nome}</Text>
                    <Text style={styles.ingredietesQnt}>Ingredientes ({route.params?.data.quantidadeIngredientes})</Text>
                </View>
                <Pressable onPress={compartilharReceita}>
                    <Feather name='share-2' size={24} color={'#121212'}/>
                </Pressable>
            </View>

            {route.params?.data.ingredientes.length === 0 ?
                //IF ternario, caso não tenha ingredientes, mostra o texto.
                <View style={styles.avisoIngrediente}>
                    <Text style={styles.semIngredientes}>Ingredientes não informados</Text>
                </View> : route.params?.data.ingredientes.map((item) => (
                    //Forma de percorrer o array de ingredientes e listar os dados:
                    <IngredientesList key={item.id} data={item}/>
                ))
            }
            <View style={styles.modoPreparoView}>
                <Text style={styles.modoPreparo}>Modo de preparo: </Text>
                <Feather name='arrow-down' size={28} color={'#FFF'}/>
            </View>
            <View style={styles.listaInstrucoes}>
                {route.params?.data.instrucoes.length === 0 ?
                    //IF ternario, caso não tenha ingredientes, mostra o texto.
                    <View style={styles.avisoIngrediente}>
                        <Text style={styles.semIngredientes}>Instrucões não informadas</Text>
                    </View> : route.params?.data.instrucoes.map((item, index) => (
                        //Forma de percorrer o array de ingredientes e listar os dados:
                        <InstrucoesList key={item.id} data={item} index={index}/>
                    ))
                }
            </View>

            <Modal visible={mostrarVideo} animationType='slide'>
                <VideoView
                    handleClose={() => setMostrarVideo(false)}
                    javaScriptEnabled={true}
                    videoUrl={route.params?.data.videoUrl}
                />
            </Modal>

            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F3f9ff',
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14
    },
    imagemUrl:{
        height:200,
        borderRadius: 14,
        zIndex:0
    },
    viewDetalhes:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    iconeVideo:{
        position: 'absolute',
        zIndex: 9,
        left: 0, right: 0, top: 75, end: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo:{
        fontSize:18,
        marginTop:14,
        fontWeight: 'bold',
        color:'#000',
        marginBottom: 4
    },
    ingredietesQnt:{
        fontSize:16,
        color:'#000',
        marginBottom: 4
    },
    avisoIngrediente:{
        alignItems:'center'
    },
    semIngredientes:{
        fontSize:18,
        fontWeight: 'bold',
        color:'#FFF',
        padding: 8,
        backgroundColor:'#962121',
        borderRadius: 4,
        marginBottom: 8
    },
    modoPreparoView:{
        alignItems:'center',
        marginBottom:14,
        backgroundColor:'#4CBE6C',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    },
    modoPreparo:{
        fontSize:18,
        fontWeight: 'bold',
        color:'#FFF'
    },
    listaInstrucoes:{
        backgroundColor:'#FFF',
        borderRadius:4
    }
})