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
const Page_01_Welcome  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_login = () => {
					navigation.navigate("Page_02_Login")
	}
	const onClick_sign_up_ = () => {
					navigation.navigate("Page_03_Register")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page2]}    >
			<View style = {noneModeStyles._Background}    >
				<View style = {noneModeStyles._Object}    >
				</View>
				<View style = {noneModeStyles._image_container}    >
					<View style = {noneModeStyles._image}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._login}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_login();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Background_2}    >
				</View>
				<Text style = {noneModeStyles._Login}   >
					Нэвтрэх
				</Text>
			</View>
			<View style = {noneModeStyles._sign_up_}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_sign_up_();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Background_3}    >
				</View>
				<Text style = {noneModeStyles._Login_2}   >
					Бүртгүүлэх
				</Text>
			</View>
			<View style = {noneModeStyles._LOGO}    >
				<Text style = {noneModeStyles._LOGO_2}   >
					ИРЦ
				</Text>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_01_Welcome

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 803,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Background: {
	width: 375.5,
	height: 361.771,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Object: {
	width: 0,
	height: 0,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_container: {
	width: 375,
	height: 361.771,
	position: "absolute",
	transform: [
		{translateX: 0.5},
	],
	},
_image: {
	width: "100%",
	height: "100%",
	},
_login: {
	width: 325,
	height: 60.1948,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 542.356},
	],
	},
_Background_2: {
	width: 325,
	height: 60.1948,
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
_Login: {
	width: 100,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 112},
		{translateY: -16.4536},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 25,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_sign_up_: {
	width: 325,
	height: 60.1948,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 629},
	],
	},
_Background_3: {
	width: 325,
	height: 60.1948,
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
_Login_2: {
	width: 126,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 99},
		{translateY: -16.0974},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 25,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_LOGO: {
	width: 136,
	height: 104,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 119.5},
		{translateY: -9.5},
	],
	},
_LOGO_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: -1},
		{translateY: -64},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 60,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
})

