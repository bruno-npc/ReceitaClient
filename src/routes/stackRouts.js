import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Search} from '../pages/search';
import {Detail} from '../pages/detail';
import {Home} from "../pages/home";

//Tipo stack que abre na frente
const Stack = createNativeStackNavigator();

export function StackRouts(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
                        options={{headerShown:false}}
                        />
            <Stack.Screen name="Detail" component={Detail}
                        options={{title:'Detalhes da receita'}}
                        />
            <Stack.Screen name="Search" component={Search}
                        options={{title:'Veja o que encontramos: '}}
                        />
        </Stack.Navigator>
    )
}