import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getFavoritos(key){
    const favoritos = await AsyncStorage.getItem(key)
    //retorna os valores encontrados localmente ou um array vazio
    return JSON.parse(favoritos) || [];
}

export async function saveFavoritos(key, newItem){
    let meusFavoritos = await getFavoritos(key)
    let existeItem = meusFavoritos.some((item) => item.id === newItem.id)
    if(existeItem){
        console.log('Receita já foi salva nos favoritos')
        return;
    }
    meusFavoritos.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(meusFavoritos))
    console.log('Salvo')
}

export async function deleteFavoritos(){
    
}

export async function isFavoritos(){
    
}