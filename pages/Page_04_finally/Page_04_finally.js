import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_image_link} from './assets/imageLinks.js'
const Page_04_finally  = ({navigation}) => {
	const [focus0, setFocus0] = useState(false);
	useEffect(() => {
	}, []);
	const onClick_Get_Started = () => {
					navigation.navigate("Page_nuur")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page3]}    >
			<View style = {noneModeStyles._Register}    >
				<View style = {noneModeStyles._Background}    >
				</View>
				<Text style = {noneModeStyles._Register_2}   >
					бүртгүүлэх
				</Text>
			</View>
			<View style = {noneModeStyles._Background_2}    >
				<View style = {noneModeStyles._Object}    >
				</View>
				<View style = {noneModeStyles._page_background}    >
				</View>
				<View style = {noneModeStyles._image_container}    >
					<View style = {noneModeStyles._image}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Get_Started}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Get_Started();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Background_3}    >
				</View>
				<Text style = {noneModeStyles._get_started}   >
					үргэлжлүүлэх
				</Text>
			</View>
			<View style = {noneModeStyles._Pagination}    >
				<View style = {noneModeStyles._layer_5bf39e}    >
					<View style = {noneModeStyles._layer_1fc7ac}   >
						<Svg style={{height: 8, width: 7}} viewBox = "0 0 7 8">
							<Path fill = {"#CCCCCC"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M3.39275 0C5.26659 0 6.78617 1.7912 6.78617 4C6.78617 6.2088 5.26659 8 3.39275 8C1.5189 8 0 6.2096 0 4C0 1.7904 1.5189 0 3.39275 0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_bd4dfd}    >
					<View style = {noneModeStyles._layer_8be5b7}   >
						<Svg style={{height: 8, width: 7}} viewBox = "0 0 7 8">
							<Path fill = {"#CCCCCC"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M3.39275 0C5.26659 0 6.78617 1.7912 6.78617 4C6.78617 6.2088 5.26659 8 3.39275 8C1.5189 8 0 6.2096 0 4C0 1.7904 1.5189 0 3.39275 0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_41197b}    >
					<View style = {noneModeStyles._layer_293fad}   >
						<Svg style={{height: 8, width: 7}} viewBox = "0 0 7 8">
							<Path fill = {"#4DB6AC"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M3.39275 0C5.26659 0 6.78617 1.7912 6.78617 4C6.78617 6.2088 5.26659 8 3.39275 8C1.5189 8 0 6.2096 0 4C0 1.7904 1.5189 0 3.39275 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {[noneModeStyles._Password, {borderColor: focus0 ? "#7E58FF" : "",backgroundColor: focus0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}]}    >
				<View style = {noneModeStyles._Background_4}    >
				</View>
				<View style={noneModeStyles._Password_2}>
					<TextInput style = {[{flex: 1, outline: "none",}]} placeholderTextColor = {"rgb(117, 117, 117)"}  placeholder = "Нэвтрэх код" onFocus = {() => setFocus0(true)} onBlur = {() => setFocus0(false)} />
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_04_finally

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 803,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Register: {
	width: 331.933,
	height: 60.1949,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: -1276.67},
		{translateY: 632.047},
	],
	},
_Background: {
	width: 331.933,
	height: 60.1949,
	backgroundColor: "rgba(161, 136, 127, 0)",
	position: "absolute",
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(126, 170, 124)",
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0691236)",
	shadowRadius: 15,
	},
_Register_2: {
	width: 108.261,
	height: 32,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 111.581},
		{translateY: -16.0974},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 55,
	fontWeight: "700",
	lineHeight: 32,
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_Background_2: {
	width: 383,
	height: 911.351,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Object: {
	width: 0,
	height: 0,
	position: "absolute",
	left: 0.5625,
	top: 0,
	},
_page_background: {
	width: 383,
	height: 567.638,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateY: 343.713},
	],
	borderRadius: 30,
	},
_image_container: {
	width: 383,
	height: 361.771,
	position: "absolute",
	},
_image: {
	width: "100%",
	height: "100%",
	},
_Get_Started: {
	width: 331.933,
	height: 60.1949,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25.5333},
		{translateY: 647.095},
	],
	},
_Background_3: {
	width: 331.933,
	height: 60.1949,
	backgroundColor: "rgb(126, 170, 124)",
	position: "absolute",
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0691236)",
	shadowRadius: 21,
	},
_get_started: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 105.467,
	top: 16.9011,
	bottom: 18.2864,
	right: 70.8143,
	color: "rgb(255, 255, 255)",
	fontSize: 25,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_Pagination: {
	width: 28.5974,
	height: 7.22339,
	position: "absolute",
	left: 177.201,
	top: 578.473,
	},
_layer_5bf39e: {
	position: "absolute",
	},
_layer_1fc7ac: {
	},
_layer_bd4dfd: {
	position: "absolute",
	transform: [
		{translateX: 11.2347},
	],
	},
_layer_8be5b7: {
	},
_layer_41197b: {
	position: "absolute",
	transform: [
		{translateX: 22.4694},
	],
	},
_layer_293fad: {
	},
_Password: {
	width: 331.933,
	height: 60.1949,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25.5333},
		{translateY: 466.51},
	],
	},
_Background_4: {
	width: 331.933,
	height: 60.1949,
	backgroundColor: "rgb(238, 238, 238)",
	position: "absolute",
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0531873)",
	shadowRadius: 13,
	},
_Password_2: {
	width: 274,
	height: 50,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 32.8667},
		{translateY: -25},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 20,
	fontWeight: "500",
	lineHeight: 49,
	fontFamily: "Montserrat",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
})

