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
const Page_03_Register  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page0}    >
			<View style = {noneModeStyles._Background}    >
				<View style = {noneModeStyles._Object}    >
				</View>
				<View style = {noneModeStyles._image_container}    >
					<View style = {noneModeStyles._image}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_link}}/>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Already_have_an_acco}   >
				Бүртгэлтэй бол нэвтрэх
			</Text>
			<View style = {noneModeStyles._register}    >
				<View style = {noneModeStyles._Background_2}    >
				</View>
				<Text style = {noneModeStyles._Register}   >
					бүртгүүлэх
				</Text>
			</View>
			<View style = {noneModeStyles._Confirm_Password}    >
				<View style = {noneModeStyles._Background_3}    >
				</View>
				<Text style = {noneModeStyles._Confirm_Password_2}   >
					Нууц үг давтах
				</Text>
			</View>
			<View style = {noneModeStyles._Password}    >
				<View style = {noneModeStyles._Background_4}    >
				</View>
				<Text style = {noneModeStyles._Password_2}   >
					Нууц үг
				</Text>
			</View>
			<View style = {noneModeStyles._Username}    >
				<View style = {noneModeStyles._Background_5}    >
				</View>
				<Text style = {noneModeStyles._Username_2}   >
					 Нэвтрэх нэр
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_03_Register

const noneModeStyles = StyleSheet.create({
_page0: {
	height: 803,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Background: {
	width: 375,
	height: 350.936,
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
	height: 350.936,
	position: "absolute",
	},
_image: {
	width: "100%",
	height: "100%",
	},
_Already_have_an_acco: {
	width: 121,
	height: 42,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 127},
		{translateY: 562.5},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 30,
	fontWeight: "700",
	lineHeight: 42,
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_register: {
	width: 325,
	height: 60.1949,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 662.144},
	],
	},
_Background_2: {
	width: 325,
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
_Register: {
	width: 106,
	height: 32,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 109},
		{translateY: -16.2413},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 25,
	fontWeight: "700",
	lineHeight: 32,
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_Confirm_Password: {
	width: 325,
	height: 60.1949,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 571.852},
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
_Confirm_Password_2: {
	width: 156,
	height: 49,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 84},
		{translateY: -24.949},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 20,
	fontWeight: "500",
	lineHeight: 49,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Password: {
	width: 325,
	height: 60.1949,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 481.559},
	],
	},
_Background_4: {
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
	width: 82,
	height: 48,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 121},
		{translateY: -23.6567},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 20,
	fontWeight: "500",
	lineHeight: 49,
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Username: {
	width: 325,
	height: 60.1949,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 391.267},
	],
	},
_Background_5: {
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
_Username_2: {
	width: 237,
	height: 49,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 41},
		{translateY: -24.5},
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

