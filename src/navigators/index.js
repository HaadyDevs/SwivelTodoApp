import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/login";
import SplashScreen from "../screens/splash";
import HomeNavigator from "./home-navigator";


const ToDoStack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <ToDoStack.Navigator initialRouteName="/splash">
                <ToDoStack.Screen name="/splash" component={SplashScreen} options={{ headerShown: false }}/>
                <ToDoStack.Screen name="/login" component={LoginScreen} options={{ headerShown: false }}/>
                <ToDoStack.Screen name="/home" component={HomeNavigator} options={{ headerShown: false }}/>
            </ToDoStack.Navigator>
        </NavigationContainer>
    );
}

