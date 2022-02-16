import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_03_Register from "./pages/Page_03_Register/Page_03_Register.js";
import Page_02_Login from "./pages/Page_02_Login/Page_02_Login.js";
import Page_01_Welcome from "./pages/Page_01_Welcome/Page_01_Welcome.js";
import Page_04_finally from "./pages/Page_04_finally/Page_04_finally.js";
import Page_03 from "./pages/Page_03/Page_03.js";
import Page_Irts from "./pages/Page_Irts/Page_Irts.js";
import Page_contact_details from "./pages/Page_contact_details/Page_contact_details.js";
import Page_angiin_medeelel_2 from "./pages/Page_angiin_medeelel_2/Page_angiin_medeelel_2.js";
import Page_angiin_medeelel from "./pages/Page_angiin_medeelel/Page_angiin_medeelel.js";
import Page_uuriin_idewhi from "./pages/Page_uuriin_idewhi/Page_uuriin_idewhi.js";
import Page_nuur from "./pages/Page_nuur/Page_nuur.js";
const Tab = createBottomTabNavigator();
const Page_03_RegisterStackNavigator = createStackNavigator();
const ScreenForPage_03_Register = () => {
	return (
		<Page_03_RegisterStackNavigator.Navigator>
			<Page_03_RegisterStackNavigator.Screen
				name = "Page_03_Register"
				component = {Page_03_Register}
				options = {{
					headerShown: false
				}}
			/>
		</Page_03_RegisterStackNavigator.Navigator>
	)
};
const Page_02_LoginStackNavigator = createStackNavigator();
const ScreenForPage_02_Login = () => {
	return (
		<Page_02_LoginStackNavigator.Navigator>
			<Page_02_LoginStackNavigator.Screen
				name = "Page_02_Login"
				component = {Page_02_Login}
				options = {{
					headerShown: false
				}}
			/>
		</Page_02_LoginStackNavigator.Navigator>
	)
};
const Page_01_WelcomeStackNavigator = createStackNavigator();
const ScreenForPage_01_Welcome = () => {
	return (
		<Page_01_WelcomeStackNavigator.Navigator>
			<Page_01_WelcomeStackNavigator.Screen
				name = "Page_01_Welcome"
				component = {Page_01_Welcome}
				options = {{
					headerShown: false
				}}
			/>
		</Page_01_WelcomeStackNavigator.Navigator>
	)
};
const Page_04_finallyStackNavigator = createStackNavigator();
const ScreenForPage_04_finally = () => {
	return (
		<Page_04_finallyStackNavigator.Navigator>
			<Page_04_finallyStackNavigator.Screen
				name = "Page_04_finally"
				component = {Page_04_finally}
				options = {{
					headerShown: false
				}}
			/>
		</Page_04_finallyStackNavigator.Navigator>
	)
};
const Page_03StackNavigator = createStackNavigator();
const ScreenForPage_03 = () => {
	return (
		<Page_03StackNavigator.Navigator>
			<Page_03StackNavigator.Screen
				name = "Page_03"
				component = {Page_03}
				options = {{
					headerShown: false
				}}
			/>
		</Page_03StackNavigator.Navigator>
	)
};
const Page_IrtsStackNavigator = createStackNavigator();
const ScreenForPage_Irts = () => {
	return (
		<Page_IrtsStackNavigator.Navigator>
			<Page_IrtsStackNavigator.Screen
				name = "Page_Irts"
				component = {Page_Irts}
				options = {{
					headerShown: false
				}}
			/>
		</Page_IrtsStackNavigator.Navigator>
	)
};
const Page_contact_detailsStackNavigator = createStackNavigator();
const ScreenForPage_contact_details = () => {
	return (
		<Page_contact_detailsStackNavigator.Navigator>
			<Page_contact_detailsStackNavigator.Screen
				name = "Page_contact_details"
				component = {Page_contact_details}
				options = {{
					headerShown: false
				}}
			/>
		</Page_contact_detailsStackNavigator.Navigator>
	)
};
const Page_angiin_medeelel_2StackNavigator = createStackNavigator();
const ScreenForPage_angiin_medeelel_2 = () => {
	return (
		<Page_angiin_medeelel_2StackNavigator.Navigator>
			<Page_angiin_medeelel_2StackNavigator.Screen
				name = "Page_angiin_medeelel_2"
				component = {Page_angiin_medeelel_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_angiin_medeelel_2StackNavigator.Navigator>
	)
};
const Page_angiin_medeelelStackNavigator = createStackNavigator();
const ScreenForPage_angiin_medeelel = () => {
	return (
		<Page_angiin_medeelelStackNavigator.Navigator>
			<Page_angiin_medeelelStackNavigator.Screen
				name = "Page_angiin_medeelel"
				component = {Page_angiin_medeelel}
				options = {{
					headerShown: false
				}}
			/>
		</Page_angiin_medeelelStackNavigator.Navigator>
	)
};
const Page_uuriin_idewhiStackNavigator = createStackNavigator();
const ScreenForPage_uuriin_idewhi = () => {
	return (
		<Page_uuriin_idewhiStackNavigator.Navigator>
			<Page_uuriin_idewhiStackNavigator.Screen
				name = "Page_uuriin_idewhi"
				component = {Page_uuriin_idewhi}
				options = {{
					headerShown: false
				}}
			/>
		</Page_uuriin_idewhiStackNavigator.Navigator>
	)
};
const Page_nuurStackNavigator = createStackNavigator();
const ScreenForPage_nuur = () => {
	return (
		<Page_nuurStackNavigator.Navigator>
			<Page_nuurStackNavigator.Screen
				name = "Page_nuur"
				component = {Page_nuur}
				options = {{
					headerShown: false
				}}
			/>
		</Page_nuurStackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	const [isPage10Open, setIsPage10Open] = useState(false)
	const zIndexPage10 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_03_Register"
							component = {ScreenForPage_03_Register}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_02_Login"
							component = {ScreenForPage_02_Login}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_01_Welcome"
							component = {ScreenForPage_01_Welcome}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_04_finally"
							component = {ScreenForPage_04_finally}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_03"
							component = {ScreenForPage_03}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Irts"
							component = {ScreenForPage_Irts}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_contact_details"
							component = {ScreenForPage_contact_details}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_angiin_medeelel_2"
							component = {ScreenForPage_angiin_medeelel_2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_angiin_medeelel"
							component = {ScreenForPage_angiin_medeelel}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_uuriin_idewhi"
							component = {ScreenForPage_uuriin_idewhi}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_nuur"
							component = {ScreenForPage_nuur}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

