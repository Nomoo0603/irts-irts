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
const Page_03  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles._Header}    >
				<View style = {noneModeStyles._Icon}    >
				</View>
				<Text style = {noneModeStyles._Position}   >
					11Б АНГИЙН ИРЦ
				</Text>
				<View style = {noneModeStyles._Icon_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Card}    >
				<View style = {noneModeStyles._Rectangle}    >
				</View>
				<View style = {noneModeStyles._Text}    >
					<Text style = {noneModeStyles._Players_Selected}   >
						ИРСЭН
					</Text>
					<Text style = {noneModeStyles._6_16}   >
						31/34
					</Text>
				</View>
				<View style = {noneModeStyles._layer_e81c4d}    >
					<View style = {noneModeStyles._layer_432710}   >
						<Svg style={{height: 40, width: 1}} viewBox = "0 0 1 40">
							<Path fill = {"none"}   stroke = {"#F2F2F2"}  d = "M0.499973 0V39.157"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Text_2}    >
					<Text style = {noneModeStyles._72_5_M}   >
						2
					</Text>
					<Text style = {noneModeStyles._Players_Selected_2}   >
						ТАСАЛСАН
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Section}    >
				<Text style = {noneModeStyles._Selected_Player}   >
					чөлөө авсан
				</Text>
				<View style = {noneModeStyles._layer_6a00c4}    >
					<View style = {noneModeStyles._layer_4557af}   >
						<Svg style={{height: 18, width: 19}} viewBox = "0 0 19 18">
							<Path fill = {"#FF7A7A"}     d = "M0.852178 8.21852L0.977007 8.2088L8.4345 8.06925L8.28906 0.967586C8.27829 0.443568 8.71564 0.0104509 9.26592 0.000191814C9.77386 -0.00927713 10.2005 0.344868 10.2716 0.811563L10.2818 0.930436L10.4283 8.03208L17.8858 7.89358C18.4361 7.88332 18.8909 8.2998 18.9017 8.82382C18.9117 9.30753 18.5398 9.71378 18.0497 9.78149L17.9249 9.79121L10.4674 9.93077L10.6128 17.0324C10.6236 17.5564 10.1862 17.9896 9.63595 17.9998C9.128 18.0093 8.70139 17.6551 8.63029 17.1885L8.62008 17.0696L8.47353 9.96794L1.01602 10.1064C0.465743 10.1167 0.0109228 9.70021 0.000150227 9.1762C-0.00896503 8.7328 0.302768 8.35448 0.732273 8.24235L0.852178 8.21852Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Card_2}    >
					<View style = {noneModeStyles._Rectangle_2}    >
					</View>
					<View style = {noneModeStyles._Image}    >
						<View style = {noneModeStyles._Mask}    >
						</View>
						<View style = {noneModeStyles._Mask_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_3}    >
						<View style = {noneModeStyles._Text_4}    >
						</View>
						<View style = {noneModeStyles._Text_5}    >
							<View style = {noneModeStyles._Rectangle_3}    >
							</View>
							<Text style = {noneModeStyles._32_5M}   >
								1 ӨДӨР
							</Text>
						</View>
						<View style = {noneModeStyles._Text_6}    >
							<Text style = {noneModeStyles._Brian_Cumin}   >
								Намуун Төрхүү
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Section_2}    >
				<Text style = {noneModeStyles._Available_Players}   >
					сурагчид
				</Text>
				<View style = {noneModeStyles._layer_6cf58f}    >
					<View style = {noneModeStyles._layer_094ab2}   >
						<Svg style={{height: 15, width: 18}} viewBox = "0 0 18 15">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#333A33"} strokeWidth = {2} d = "M16.5542 1.01588H1.01588L7.23121 7.83141V12.5432L10.3389 13.9841V7.83141L16.5542 1.01588V1.01588Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Card_3}    >
					<View style = {noneModeStyles._Rectangle_4}    >
					</View>
					<View style = {noneModeStyles._Image_2}    >
						<View style = {noneModeStyles._Mask_3}    >
						</View>
						<View style = {noneModeStyles._Mask_4}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_7}    >
						<View style = {noneModeStyles._Text_8}    >
							<View style = {noneModeStyles._Rectangle_5}    >
							</View>
							<Text style = {noneModeStyles._14_6M}   >
								14.6M
							</Text>
						</View>
						<View style = {noneModeStyles._Text_9}    >
							<Text style = {noneModeStyles._Nathaneal_Down}   >
								Nathaneal Down
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_6}    >
					</View>
					<View style = {noneModeStyles._Card_4}    >
						<View style = {noneModeStyles._Rectangle_7}    >
						</View>
						<View style = {noneModeStyles._Image_3}    >
							<View style = {noneModeStyles._Mask_5}    >
							</View>
							<View style = {noneModeStyles._Mask_6}    >
							</View>
						</View>
						<View style = {noneModeStyles._Text_10}    >
							<View style = {noneModeStyles._Text_11}    >
								<View style = {noneModeStyles._Rectangle_8}    >
								</View>
								<Text style = {noneModeStyles._14_6M_2}   >
									ИРСЭН
								</Text>
							</View>
							<View style = {noneModeStyles._Text_12}    >
								<Text style = {noneModeStyles._Nathaneal_Down_2}   >
									Амарбаясгалан Бүрэн
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Card_5}    >
					<View style = {noneModeStyles._Rectangle_9}    >
					</View>
					<View style = {noneModeStyles._Image_4}    >
						<View style = {noneModeStyles._Mask_7}    >
						</View>
						<View style = {noneModeStyles._Mask_8}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_13}    >
						<View style = {noneModeStyles._Text_14}    >
							<View style = {noneModeStyles._Rectangle_10}    >
							</View>
							<Text style = {noneModeStyles._14_6M_3}   >
								14.6M
							</Text>
						</View>
						<View style = {noneModeStyles._Text_15}    >
							<Text style = {noneModeStyles._Nathaneal_Down_3}   >
								Nathaneal Down
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_11}    >
					</View>
					<View style = {noneModeStyles._Card_6}    >
						<View style = {noneModeStyles._Rectangle_12}    >
						</View>
						<View style = {noneModeStyles._Image_5}    >
							<View style = {noneModeStyles._Mask_9}    >
							</View>
							<View style = {noneModeStyles._Mask_10}    >
							</View>
						</View>
						<View style = {noneModeStyles._Text_16}    >
							<View style = {noneModeStyles._Text_17}    >
								<View style = {noneModeStyles._Rectangle_13}    >
								</View>
								<Text style = {noneModeStyles._14_6M_4}   >
									ИРСЭН
								</Text>
							</View>
							<View style = {noneModeStyles._Text_18}    >
								<Text style = {noneModeStyles._Nathaneal_Down_4}   >
									Номон-Эрдэнэ Цэнгүүн
								</Text>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Card_7}    >
						<View style = {noneModeStyles._Rectangle_14}    >
						</View>
						<View style = {noneModeStyles._Image_6}    >
							<View style = {noneModeStyles._Mask_11}    >
							</View>
							<View style = {noneModeStyles._Mask_12}    >
							</View>
						</View>
						<View style = {noneModeStyles._Text_19}    >
							<View style = {noneModeStyles._Text_20}    >
								<View style = {noneModeStyles._Rectangle_15}    >
								</View>
								<Text style = {noneModeStyles._14_6M_5}   >
									ИРСЭН
								</Text>
							</View>
							<View style = {noneModeStyles._Text_21}    >
								<Text style = {noneModeStyles._Nathaneal_Down_5}   >
									Бүрэнжаргал Энхмөнх
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Card_8}    >
					<View style = {noneModeStyles._Rectangle_16}    >
					</View>
					<View style = {noneModeStyles._Image_7}    >
						<View style = {noneModeStyles._Mask_13}    >
						</View>
						<View style = {noneModeStyles._Mask_14}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_22}    >
						<View style = {noneModeStyles._Text_23}    >
							<View style = {noneModeStyles._Rectangle_17}    >
							</View>
							<Text style = {noneModeStyles._14_6M_6}   >
								ИРСЭН
							</Text>
						</View>
						<View style = {noneModeStyles._Text_24}    >
							<Text style = {noneModeStyles._Nathaneal_Down_6}   >
								Өнөржаргал Баатархүү
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_03

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 814,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(250, 250, 250)",
	},
_Header: {
	width: 369,
	height: 21,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 15,
	top: 48,
	},
_Icon: {
	width: 17.2073,
	height: 16.4348,
	position: "absolute",
	transform: [
		{translateY: 2.73914},
	],
	},
_Position: {
	width: 122.363,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 123.319},
		{translateY: -11.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "center",
	},
_Icon_2: {
	width: 3.82874,
	height: 16.4348,
	position: "absolute",
	transform: [
		{translateX: 342.539},
		{translateY: 2.73914},
	],
	},
_Card: {
	width: 378,
	height: 64.6546,
	position: "absolute",
	left: 14,
	top: 96.2633,
	},
_Rectangle: {
	width: 369.016,
	height: 64.6546,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 6,
	},
_Text: {
	width: 162,
	height: 52,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 7,
	top: 7.73672,
	},
_Players_Selected: {
	width: 63.3912,
	height: 18,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 49.3043},
		{translateY: -22},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_6_16: {
	width: 59.1652,
	height: 42,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 50.713},
		{translateY: 1},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_layer_e81c4d: {
	width: 0.956055,
	height: 39.157,
	position: "absolute",
	left: 184.03,
	top: 12.7488,
	},
_layer_432710: {
	},
_Text_2: {
	width: 162,
	height: 39,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 216,
	top: 12.7367,
	},
_72_5_M: {
	width: 11.4803,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 75.2599},
		{translateY: 1.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Players_Selected_2: {
	width: 88.0157,
	height: 18,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 36.9922},
		{translateY: -21.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Section: {
	width: 369,
	height: 132,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 14,
	top: 188,
	},
_Selected_Player: {
	width: 106.875,
	height: "auto",
	position: "absolute",
	top: 0,
	bottom: 109.125,
	right: 146,
	transform: [
		{translateX: -114},
		{translateY: 14},
	],
	color: "rgba(51, 58, 51, 0.79)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "left",
	},
_layer_6a00c4: {
	position: "absolute",
	top: 0,
	right: 145,
	transform: [
		{translateX: 331.451},
		{translateY: 4.64494},
	],
	},
_layer_4557af: {
	},
_Card_2: {
	width: 369,
	height: 92.8552,
	position: "absolute",
	left: 0,
	top: 39.1448,
	},
_Rectangle_2: {
	width: 369,
	height: 92.8552,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image: {
	width: 63.0933,
	height: 60.0828,
	position: "absolute",
	left: 13.3834,
	top: 16.3862,
	},
_Mask: {
	width: 63.0933,
	height: 60.0828,
	position: "absolute",
	},
_Mask_2: {
	width: 63.0933,
	height: 60.0828,
	position: "absolute",
	},
_Text_3: {
	width: 265.756,
	height: 63.7241,
	position: "absolute",
	left: 87.9482,
	top: 12.7448,
	},
_Text_4: {
	width: 38.2383,
	height: 20.9379,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Text_5: {
	width: 76.4766,
	height: 32.7724,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 189.28},
		{translateY: 20.9379},
	],
	},
_Rectangle_3: {
	width: 76.4766,
	height: 32.7724,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_32_5M: {
	width: 61.0079,
	height: 18,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7.14795},
		{translateY: -8.38621},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_6: {
	width: 149.13,
	height: 33.6828,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 30.0414},
	],
	},
_Brian_Cumin: {
	width: 221.435,
	height: 20,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.8414},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Section_2: {
	width: 369,
	height: 455,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 14,
	top: 347,
	},
_Available_Players: {
	width: 67.873,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 0.955933},
		{translateY: -248.5},
	],
	color: "rgba(51, 58, 51, 0.79)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_layer_6cf58f: {
	position: "absolute",
	transform: [
		{translateX: 340.912},
		{translateY: 4.55912},
	],
	},
_layer_094ab2: {
	},
_Card_3: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0,
	top: 146.804,
	},
_Rectangle_4: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_2: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	left: 13.3834,
	top: 16.4128,
	},
_Mask_3: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Mask_4: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Text_7: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9482,
	top: 30.0902,
	},
_Text_8: {
	width: 76.4768,
	height: 32.8257,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_5: {
	width: 76.4768,
	height: 32.8257,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M: {
	width: 36.3264,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 20.0752},
		{translateY: -8.41283},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_9: {
	width: 126.187,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73547},
	],
	},
_Nathaneal_Down: {
	width: 125.231,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Rectangle_6: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Card_4: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_7: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_3: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	left: 13.3834,
	top: 16.4128,
	},
_Mask_5: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Mask_6: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Text_10: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9481,
	top: 30.0902,
	},
_Text_11: {
	width: 76.4767,
	height: 32.8257,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_8: {
	width: 76.4767,
	height: 32.8257,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_2: {
	width: 60.024,
	height: 16.4128,
	position: "absolute",
	transform: [
		{translateX: 8.18811},
		{translateY: 8.20641},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_12: {
	width: 182.588,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73547},
	],
	},
_Nathaneal_Down_2: {
	width: 182.588,
	height: 21,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_5: {
	width: 369.956,
	height: 202.425,
	position: "absolute",
	left: 0,
	top: 252.575,
	},
_Rectangle_9: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_4: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	left: 13.3834,
	top: 16.4128,
	},
_Mask_7: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Mask_8: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Text_13: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9482,
	top: 30.0902,
	},
_Text_14: {
	width: 76.4768,
	height: 32.8257,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_10: {
	width: 76.4768,
	height: 32.8257,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_3: {
	width: 36.3264,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 20.0752},
		{translateY: -8.41283},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_15: {
	width: 126.187,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73544},
	],
	},
_Nathaneal_Down_3: {
	width: 125.231,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Rectangle_11: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Card_6: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_12: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_5: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	left: 13.3834,
	top: 16.4128,
	},
_Mask_9: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Mask_10: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Text_16: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9481,
	top: 30.0902,
	},
_Text_17: {
	width: 76.4767,
	height: 32.8257,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_13: {
	width: 76.4767,
	height: 32.8257,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_4: {
	width: 60.024,
	height: 16.4128,
	position: "absolute",
	transform: [
		{translateX: 8.18811},
		{translateY: 8.20642},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_18: {
	width: 182.588,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73544},
	],
	},
_Nathaneal_Down_4: {
	width: 182.588,
	height: 21,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_7: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0.955933,
	top: 109.419,
	},
_Rectangle_14: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_6: {
	width: 63.0933,
	height: 60.1803,
	position: "absolute",
	left: 12.4275,
	top: 15.501,
	},
_Mask_11: {
	width: 63.0933,
	height: 60.1803,
	position: "absolute",
	},
_Mask_12: {
	width: 63.0933,
	height: 60.1803,
	position: "absolute",
	},
_Text_19: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 86.9922,
	top: 29.1784,
	},
_Text_20: {
	width: 76.4767,
	height: 32.8256,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_15: {
	width: 76.4767,
	height: 32.8256,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_5: {
	width: 60.0239,
	height: 16.4128,
	position: "absolute",
	transform: [
		{translateX: 8.18811},
		{translateY: 8.20639},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_21: {
	width: 182.588,
	height: 37.3847,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73544},
	],
	},
_Nathaneal_Down_5: {
	width: 182.588,
	height: 21,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_8: {
	width: 369,
	height: 93.006,
	position: "absolute",
	left: 0,
	top: 41.0321,
	},
_Rectangle_16: {
	width: 369,
	height: 93.006,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_7: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	left: 13.3834,
	top: 16.4128,
	},
_Mask_13: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Mask_14: {
	width: 63.0933,
	height: 60.1804,
	position: "absolute",
	},
_Text_22: {
	width: 267.668,
	height: 40.1202,
	position: "absolute",
	left: 87.9481,
	top: 30.0902,
	},
_Text_23: {
	width: 76.4767,
	height: 32.8256,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 191.192},
	],
	},
_Rectangle_17: {
	width: 76.4767,
	height: 32.8256,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_6: {
	width: 60.024,
	height: 18,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 6.22009},
		{translateY: -8.41282},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 14.0625,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_24: {
	width: 182.588,
	height: 37.3848,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 2.73547},
	],
	},
_Nathaneal_Down_6: {
	width: 182.588,
	height: 21,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.6924},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
})

