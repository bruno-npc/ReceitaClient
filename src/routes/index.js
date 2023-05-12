import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//import {Home} from '../pages/home'
//import {Search} from '../pages/search'
//import {Detail} from '../pages/detail'
import {Favorite} from '../pages/favorites'
import { StackRouts } from './stackRouts';


import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        //Funções prontas da biblioteca react-navigation - headerShown é para ativar o nome da tab no header da tela
        //Tab.screen chama os componentes criados dividindo eles em uma tab no canto inferior da tela 
        //(por isso o import de BOTTOM-TABS)
        //tabBarHideOnKeyboard serve para esconder as tabs quando abrir um teclado na tela
        //tabBarShowLabel serve para esconder o nome da tab, mostrando só o icone
        //tabBarActiveTintColor serve para mudar a cor do icone da tab atual
        //tabBarStyle serve para personalizar a tabbar
        <Tab.Navigator screenOptions={{headerShown: false, tabBarHideOnKeyboard:true, 
                                        tabBarShowLabel:false, tabBarActiveTintColor:'#121212',
                                        tabBarStyle:{
                                            backgroundColor:'#fff',
                                            borderTopWidth:0
                                        }}}>
            <Tab.Screen name='HomeTab' component={StackRouts}
                //Personalizar icone Home de acordo com uma biblioteca de icons do expo
                options={{
                    //tabBarIcon recebe uma função anonima do js, recebe 3 propriedades padrões do icone
                    tabBarIcon: ({color, size, focused}) => {
                        //Se o usuario estiver nessa tela
                        if(focused){
                            return <Ionicons name='home' color='#4CBE6C' size={size}/>
                        }
                        //Caso não esteja em foco retorna outro icone com os valores padrão
                        return <Ionicons name='home-outline' color={color} size={size}/>
                    }
                }}/>

            <Tab.Screen name='FavoriteTab' component={Favorite}
               //Personalizar icone Home de acordo com uma biblioteca de icons do expo
               options={{
                //tabBarIcon recebe uma função anonima do js, recebe 3 propriedades padrões do icone
                tabBarIcon: ({color, size, focused}) => {
                    //Se o usuario estiver nessa tela
                    if(focused){
                        return <Ionicons name='bookmark' color='#ff8041' size={size}/>
                    }
                    //Caso não esteja em foco retorna outro icone com os valores padrão
                    return <Ionicons name='bookmark-outline' color={color} size={size}/>
                }
            }}/>
        </Tab.Navigator>
    )
}
 