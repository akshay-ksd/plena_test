import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import CustomBottomTab from '../../components/molecules/CustomBottomTab/CustomBottomTab';
import Home from '../../screens/HomeScreen';
import Routes from '..';
import CartScreen from '../../screens/cart-screen/cart-screen';
import FavoritesScreen from '../../screens/favorites-screen/favorites-screen';
import CategoryScreen from '../../screens/category-screen/category-screen';
function MyNetwork() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>My Network!</Text>
        </View>
    );
}

function POst() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Post!</Text>
        </View>
    );
}

function Notification() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notification!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();
export type BottomTabParamList = {
    Home: undefined;
    Notification: undefined;
    Profile: undefined;
};

const CustomBottomTabs = (props: BottomTabBarProps) => {
    return <CustomBottomTab {...props} />;
};


export default function TabScreen() {
    return (
            <Tab.Navigator tabBar={CustomBottomTabs}
                screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Menu" component={CategoryScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Fav" component={FavoritesScreen} options={{ headerShown: false }} />
                <Tab.Screen name="More" component={MyNetwork} options={{ headerShown: false }} />
            </Tab.Navigator>
    );
}
