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
const Page_02_Login  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Background_2 = () => {
					navigation.navigate("Page_04_finally")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page1]}    >
			<View style = {noneModeStyles._Background}    >
				<View style = {noneModeStyles._Object}    >
				</View>
				<View style = {noneModeStyles._image_container}    >
					<View style = {noneModeStyles._image}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_link}}/>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Not_a_member_yet__Re}   >
				Бүртгэлгүй бол БҮРТГҮҮЛЭХ
			</Text>
			<View style = {noneModeStyles._login}    >
				<View style = {noneModeStyles._Background_2}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Background_2();}} onStartShouldSetResponderCapture = {() => true}>
				</View>
				<Text style = {noneModeStyles._Login}   >
					нэвтрэх
				</Text>
			</View>
			<View style = {noneModeStyles._Password}    >
				<View style = {noneModeStyles._Background_3}    >
				</View>
				<Text style = {noneModeStyles._Password_2}   >
					Нууц үг
				</Text>
			</View>
			<View style = {noneModeStyles._Username}    >
				<View style = {noneModeStyles._Background_4}    >
				</View>
				<Text style = {noneModeStyles._Username_2}   >
					Нэвтрэх нэр
				</Text>
			</View>
			<View style = {noneModeStyles._Line_1}    >
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_02_Login

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 803,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Background: {
	width: 375,
	height: 387.528,
	position: "absolute",
	left: 1,
	top: -39,
	},
_Object: {
	width: 0,
	height: 0,
	position: "absolute",
	left: 23,
	top: 0,
	},
_image_container: {
	width: 375,
	height: 361.771,
	position: "absolute",
	transform: [
		{translateY: 25.7571},
	],
	},
_image: {
	width: "100%",
	height: "100%",
	},
_Not_a_member_yet__Re: {
	width: 137.5,
	height: 42,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 119.5},
		{translateY: 489.5},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 30,
	fontWeight: "700",
	lineHeight: 42,
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_login: {
	width: 325,
	height: 60.1948,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 601.949},
	],
	},
_Background_2: {
	width: 325,
	height: 60.1948,
	backgroundColor: "rgb(126, 170, 124)",
	position: "absolute",
	transform: [
		{translateY: 0.151},
	],
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0691236)",
	shadowRadius: 21,
	},
_Login: {
	width: 75.5,
	height: 32,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 124},
		{translateY: -16.0464},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 25,
	fontWeight: "700",
	lineHeight: 32,
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_Password: {
	width: 325,
	height: 60.1949,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 511.657},
	],
	},
_Background_3: {
	width: 325,
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
	width: 87,
	height: 47,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 119},
		{translateY: -23.7541},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 20,
	fontWeight: "400",
	lineHeight: 49,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Username: {
	width: 325,
	height: 60.195,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 421.364},
	],
	},
_Background_4: {
	width: 325,
	height: 60.195,
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
_Username_2: {
	width: 132,
	height: 49,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 96},
		{translateY: -25.4617},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 20,
	fontWeight: "500",
	lineHeight: 49,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Line_1: {
	width: 115,
	height: 0,
	position: "absolute",
	left: 399,
	top: 1191,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(58, 131, 124)",
	},
})

