import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../pages/HomePage";
import SettigsPage from "../pages/SettingsPage";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppRoute = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="Home" 
                component={HomePage} />
                <Tab.Screen
                name="Settings"
                component={SettigsPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default AppRoute;